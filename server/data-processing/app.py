from flask import Flask, request, jsonify, Response
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np
import os
import cv2
import mediapipe as mp
from pose_format import Pose
from pose_format.pose_visualizer import PoseVisualizer

from mp_keypoints import mediapipe_detection, draw_styled_landmarks, extract_keypoints

mp_holistic = mp.solutions.holistic 

app = Flask(__name__)

CORS(app)

model = tf.keras.models.load_model('model1.h5')
actions = []
with open("data/words.txt", "r") as file:
    actions = [line.strip() for line in file if line.strip()]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    sequence = np.array(data['seq'])
    res = model.predict(np.expand_dims(sequence, axis=0))[0]
    print(actions[np.argmax(res)])
    return jsonify({"word": actions[np.argmax(res)]})

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/translate', methods=['GET'])
def translate():
    sequence = []
    sentence = []
    cap = cv2.VideoCapture(0)
    with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
            image, results = mediapipe_detection(frame, holistic)
            image = cv2.resize(image, (520, 390))
            draw_styled_landmarks(image, results)
            keypoints = extract_keypoints(results)

            sequence.append(keypoints)
            sequence = sequence[-50:]
    
            if len(sequence) % 50 == 0:
                res = model.predict(np.expand_dims(sequence, axis=0))[0]
                # print(actions[np.argmax(res)])
                if len(sentence) > 0: 
                    if actions[np.argmax(res)] != sentence[-1]:
                        sentence.append(actions[np.argmax(res)])
                else:
                    sentence.append(actions[np.argmax(res)])
            
            cv2.imshow('Sign Language Detection', image)
            cv2.moveWindow('Sign Language Detection', 250, 250)
            if cv2.getWindowProperty('Sign Language Detection', cv2.WND_PROP_VISIBLE) >= 1:
                cv2.setWindowProperty('Sign Language Detection', cv2.WND_PROP_TOPMOST, 1)
            if cv2.waitKey(10) & 0xFF == ord('q'):
                break
        
        cap.release()
        cv2.destroyAllWindows()
    return jsonify({"word": sentence})

@app.route('/translate-text', methods=['POST'])
@cross_origin(origins='http://localhost:3000')
def translate_text():
    from googletrans import LANGUAGES, Translator
    translator = Translator()
    data = request.get_json()
    text = data.get('text')
    src_language = data.get('src')
    dest_language = data.get('dest')
    if src_language is None:
        src_language = translator.detect(text=text).lang
    language = LANGUAGES.get(src_language, "Unknown language").capitalize()
    if dest_language not in LANGUAGES or src_language not in LANGUAGES:
        return jsonify({"error": "Invalid language code"}), 400
    translations = translator.translate(text=text, src=src_language, dest=dest_language).text
    return jsonify({"language": language, "translation": translations}), 200

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload-video', methods=['POST'])
def process_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file in the request'}), 400

    video = request.files['video']
    if video.filename == '':
        return jsonify({'error': 'No selected video'}), 400

    video_path = os.path.join(UPLOAD_FOLDER, video.filename)
    video.save(video_path)
    result = predict_video(video_path)
    return jsonify({'prediction': result}), 200
    
@app.route('/draw_pose', methods=['POST'])
def draw():
    VIDEO_DIR = "generated_videos"
    os.makedirs(VIDEO_DIR, exist_ok=True)
    if 'pose' not in request.files:
        return jsonify({'error': 'No video file in the request'}), 400
    file = request.files['pose']
    pose_data = file.read()

    pose = Pose.read(pose_data)
    v = PoseVisualizer(pose)
    v.save_video("pose.mp4", v.draw())

    with open("pose.mp4", "rb") as video_file:
        video_content = video_file.read()

    return Response(
        video_content,
        mimetype='video/mp4',
        headers={
            'Content-Disposition': 'attachment; filename="example.mp4"'
        }
    )

def predict_video(video_path, size=50):
    cap = cv2.VideoCapture(video_path)
    sequence = []
    sentence = []
    with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
            image, results = mediapipe_detection(frame, holistic)
            keypoints = extract_keypoints(results)
            sequence.append(keypoints)
            if len(sequence) == size:
                res = model.predict(np.expand_dims(sequence, axis=0))[0]
                print(res[np.argmax(res)], "    ", actions[np.argmax(res)])
                if len(sentence) > 0: 
                    if actions[np.argmax(res)] != sentence[-1]:
                        sentence.append(actions[np.argmax(res)])
                else:
                    sentence.append(actions[np.argmax(res)])
                sequence = []

        cap.release()
    return sentence

if __name__ == '__main__':
    app.run(debug=True)
