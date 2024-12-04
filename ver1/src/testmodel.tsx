import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const SignLanguageDetector: React.FC = () => {
  // State variables
  const [buttonClicked, setButtonClicked] = useState<'upload' | 'camera' | ''>('');
  const [prediction, setPrediction] = useState<string>('ASLToText');
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const uploadVideoRef = useRef<HTMLVideoElement>(null);
  const [uploadPrediction, setUploadPrediction] = useState<string>('');

  // Load TensorFlow.js model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        // Replace the URL with the path to your model.json
        const loadedModel = await tf.loadLayersModel('/models/your_model/model.json');
        setModel(loadedModel);
        console.log('TensorFlow.js model loaded successfully.');
      } catch (error) {
        console.error('Error loading TensorFlow.js model:', error);
      }
    };

    loadModel();
  }, []);

  // Handle real-time camera processing
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
	console.log("camera on")
	  const startCamera = async () => {
		console.log("camera on")
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
			  videoRef.current.srcObject = stream;
			  console.log('Stream assigned to video');
            videoRef.current.play();
            setIsCameraOn(true);
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      }
    };

    const processCameraFrame = () => {
      if (videoRef.current && canvasRef.current && model) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // Draw the current frame from the video onto the canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Get image data from the canvas
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

          // Preprocess the image data
          const tensor = preprocessImage(imageData);

          // Make prediction
          const predictionResult = model.predict(tensor) as tf.Tensor;
          const predictedClass = predictionResult.argMax(-1).dataSync()[0];
          setPrediction(`Class: ${predictedClass}`);

          // Dispose tensors to free memory
          tf.dispose([tensor, predictionResult]);
        }
      }
    };

    // if (isCameraOn) {
    //   intervalId = setInterval(processCameraFrame, 500); // Adjust the interval as needed
    // }

    // return () => {
    //   if (intervalId) clearInterval(intervalId);
	  // };
	  if (isCameraOn) {
		startCamera();
		intervalId = setInterval(processCameraFrame, 500); // Adjust the interval as needed
	  }
  
	  // Cleanup interval when the camera is turned off
	  return () => {
		if (intervalId) clearInterval(intervalId);
  
		// // Clean up the camera stream
		// if (videoRef.current && videoRef.current.srcObject) {
		//   const stream = videoRef.current.srcObject as MediaStream;
		//   stream.getTracks().forEach((track) => track.stop());
		//   videoRef.current.srcObject = null;
		// }
		// setIsCameraOn(false); // Reset camera state
	  };
  }, [isCameraOn, model]);

  // Handle video upload processing
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && uploadVideoRef.current && model) {
      const videoElement = uploadVideoRef.current;
      videoElement.src = URL.createObjectURL(file);
      videoElement.onloadeddata = () => {
        videoElement.play();
        processUploadedVideo(videoElement);
      };
    }
  };

  const processUploadedVideo = (video: HTMLVideoElement) => {
    const canvas = document.createElement('canvas');
    canvas.width = 224; // Adjust based on your model's input size
    canvas.height = 224;
    const ctx = canvas.getContext('2d');

    const processFrame = () => {
      if (video.paused || video.ended) return;

      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const tensor = preprocessImage(imageData);

        const predictionResult = model!.predict(tensor) as tf.Tensor;
        const predictedClass = predictionResult.argMax(-1).dataSync()[0];
        setUploadPrediction(`Class: ${predictedClass}`);

        tf.dispose([tensor, predictionResult]);
      }

      requestAnimationFrame(processFrame);
    };

    processFrame();
  };

  // Preprocess image data for the model
  const preprocessImage = (imageData: ImageData): tf.Tensor => {
    return tf.tidy(() => {
      const img = tf.browser.fromPixels(imageData).toFloat();
      const resized = tf.image.resizeBilinear(img, [224, 224]); // Adjust based on your model
      const normalized = resized.div(255.0);
      const batched = normalized.expandDims(0);
      return batched;
    });
  };

  // Handle opening the camera
  const handleCameraStart = () => {
    setButtonClicked('camera');
	  setIsCameraOn(true);
	 
  };

  // Handle stopping the camera
  const handleCameraStop = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
    setButtonClicked('');
    setPrediction('');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex space-x-6">
        {/* Left Column */}
        <div className="w-[580px] bg-white border border-gray-300 rounded-lg p-6">
          {buttonClicked === 'upload' ? (
            <div className="flex flex-col items-center justify-center h-[300px] border border-gray-300 rounded-lg text-lg">
              <h2 className="text-2xl mb-1">Choose a video</h2>
              <h3>Upload a .mp4, .ogv or .webm</h3>
              <br />
              <input
                type="file"
                accept="video/mp4, video/ogg, video/webm"
                onChange={handleVideoUpload}
                className="hidden"
                id="upload-input"
              />
              <label htmlFor="upload-input">
                <button className="bg-[#1A73E8] text-[#ffffff] px-6 py-3 rounded-lg font-bold cursor-pointer">
                  BROWSE YOUR COMPUTER
                </button>
              </label>
              {/* Hidden video element for processing uploaded video */}
              <video ref={uploadVideoRef} className="hidden" />
              {/* Display prediction for uploaded video */}
              {uploadPrediction && (
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">Prediction:</h3>
                  <p>{uploadPrediction}</p>
                </div>
              )}
            </div>
          ) : buttonClicked === 'camera' ? (
            <div className="flex flex-col items-center justify-center h-[300px] border border-gray-300 rounded-lg text-lg">
              <h2 className="text-2xl mb-1">Camera is {isCameraOn ? 'On' : 'Off'}</h2>
              <br />
              {isCameraOn ? (
                <button
                  className="bg-red-500 text-[#ffffff] px-6 py-3 rounded-lg font-bold"
                  onClick={handleCameraStop}
                >
                  STOP CAMERA
                </button>
              ) : (
                <button
                  className="bg-[#1A73E8] text-[#ffffff] px-6 py-3 rounded-lg font-bold"
                  onClick={handleCameraStart}
                >
                  OPEN YOUR CAMERA
                </button>
              )}
              {/* Video and Canvas Elements for Camera Processing */}
              {isCameraOn && (
                <div>
                  <video ref={videoRef} width="224" height="224" />
                  <canvas ref={canvasRef} width="224" height="224" />
                </div>
              )}
              {/* Display prediction for camera */}
              {prediction && (
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">Prediction:</h3>
                  <p>{prediction}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] border border-gray-300 rounded-lg text-lg">
              <h2 className="text-2xl mb-1">Choose an option</h2>
              <h3>Upload a video or use your camera</h3>
            </div>
          )}
          {/* Mode Toggle Buttons */}
          <div className="flex justify-between mt-6">
            <div className="flex space-x-4">
              <button
                className={`p-3 border border-gray-300 rounded-full ${
                  buttonClicked === 'upload' ? 'bg-[#D2E3FC]' : ''
                }`}
                onClick={() => setButtonClicked('upload')}
              >
                <img
                  src="https://cdn0.iconfinder.com/data/icons/glyphpack/40/upload-128.png"
                  alt="Upload"
                  className="w-6 h-6"
                />
              </button>
              <button
                className={`p-3 border border-gray-300 rounded-full ${
                  buttonClicked === 'camera' ? 'bg-[#D2E3FC]' : ''
                }`}
				//onClick={startCamera}
                onClick={() => setButtonClicked('camera')}
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-128.png"
                  alt="Camera"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[580px] bg-[#F5F7FD] rounded-lg p-6 border border-gray-300">
          <div className="h-[300px] bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-center">
            {/* Placeholder for output content (e.g., video preview or processed data) */}
            <p className="text-gray-500">Processed Output Will Appear Here</p>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button className="p-3 border border-gray-300 rounded-full">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_save-128.png"
                alt="Download"
                className="w-6 h-6"
              />
            </button>
            <button className="p-3 border border-gray-300 rounded-full">
              <img
                src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-copy-128.png"
                alt="Copy"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageDetector;


