import numpy as np
import pandas as pd 
import os
import cv2
import mediapipe as mp
import pdb

#pdb.set_trace()
from mp_keypoints import extract_keypoints, mediapipe_detection
#pdb.set_trace()
from data_loader import download_video, load_json
print("here")
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_holistic = mp.solutions.holistic

def transform(path, gloss, instance):
    data_path = "data/MP_data"
    os.makedirs(data_path, exist_ok=True)
    frame_number = 0
    
    cap = cv2.VideoCapture(path)
    with mp_holistic.Holistic(min_detection_confidence=0.5,min_tracking_confidence=0.5) as holistic:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
            image, results = mediapipe_detection(frame, holistic)
            frame_number += 1
            #draw_styled_landmarks(image, results)
            #pdb.set_trace()
            #cv2.imshow('OpenCV Feed', image)
            keypoints = extract_keypoints(results)
            id = instance['video_id']
            npy_path = f'data/MP_data/{gloss}/{id}/{frame_number}.npy'
    
            if os.path.exists(npy_path):
                print(f"Keypoints for frame {frame_number} already exist. Loading existing data.")
                keypoints = np.load(npy_path)
            else:
                os.makedirs(os.path.dirname(npy_path), exist_ok=True)
                # Save the keypoints to the .npy file
                try:
                    np.save(npy_path, keypoints)
                    
                except Exception as e:
                    print(f"Error saving keypoints: {e}")
            # if cv2.waitKey(10) & 0xFF == ord('q'):
            #     break
            if (frame_number == 30):
                break
            
        cap.release()
        cv2.destroyAllWindows()

def extract_frames(data, videos_folder):
    os.makedirs(videos_folder, exist_ok=True)
    for gloss in data:
        for instance in gloss['instances']:
            url = instance['url']
            video_id = instance['video_id']
            save_path = os.path.join(videos_folder, f"{video_id}.mp4")
            print(f"Downloading {instance['video_id']}...")
            download_video(url, save_path)
            transform(save_path, gloss['gloss'], instance)


json_data_path = "data/test.json"
videos_folder = "data/videos/" 
data, video_data = load_json(json_data_path)
print(data)
extract_frames(data, videos_folder)
