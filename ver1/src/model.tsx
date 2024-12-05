import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as Holistic from '@mediapipe/holistic';
import { Camera } from '@mediapipe/camera_utils';
import axios from 'axios';

	const SignLanguageDetector: React.FC = () => {
		const [buttonClicked, setButtonClicked] = useState<'upload' | 'camera' | ''>('');
		const [prediction, setPrediction] = useState<string>('ASLToText');
		const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
		const videoRef = useRef<HTMLVideoElement>(null);
		const canvasRef = useRef<HTMLCanvasElement>(null);
		const uploadVideoRef = useRef<HTMLVideoElement>(null);
		const [uploadPrediction, setUploadPrediction] = useState<string>('');
		const holisticRef = useRef<Holistic.Holistic | null>(null);
		const cameraRef = useRef<Camera | null>(null);
		const sequence = useRef<any[]>([]);
  		const sentence = useRef<any[]>([]);
		useEffect(() => {
			const holistic = new Holistic.Holistic({
				locateFile: (file: any) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
			});

			holistic.setOptions({
				modelComplexity: 1,
				smoothLandmarks: true,
				enableSegmentation: false,
				refineFaceLandmarks: true,
			});

			holistic.onResults(handleHolisticResults);
			holisticRef.current = holistic;
		});

		useEffect(() => {
			  const startCamera = async () => {
				console.log("camera on")
			  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
				try {
				  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
				  if (videoRef.current && videoRef.current.srcObject !== stream) {
					  videoRef.current.srcObject = stream;
					  console.log('Stream assigned to video');
					  //videoRef.current.play();
					  if (videoRef.current && videoRef.current.paused) {
						videoRef.current.play().catch(error => console.error('Error playing video:', error));;
					  }
					  setIsCameraOn(true);
					  handleCameraStart();
				  }
				} catch (error) {
				  console.error('Error accessing camera:', error);
				}
			  }
			};
		
			const processCameraFrame = () => {
			  if (videoRef.current && canvasRef.current) {
				const video = videoRef.current;
				const canvas = canvasRef.current;
				const ctx = canvas.getContext('2d');
		
				if (ctx) {
				  // Draw the current frame from the video onto the canvas
				  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				}
			  }
			};
			
			if (isCameraOn && videoRef.current && !videoRef.current.srcObject) {
				  startCamera();
				  requestAnimationFrame(processCameraFrame);
			};
		}, [isCameraOn]);

		const handleCameraButtonClick = () => {
			setButtonClicked('camera');
			setIsCameraOn(true);
		};
	
		const extractKeypoints = (results: Holistic.Results) => {
			const pose = results.poseLandmarks ? results.poseLandmarks.map((res) => [res.x, res.y, res.z, res.visibility]).flat() : Array(33 * 4).fill(0);
			const face = results.faceLandmarks ? results.faceLandmarks.slice(0, 468).map((res) => [res.x, res.y, res.z]).flat() : Array(468 * 3).fill(0);
			const leftHand = results.leftHandLandmarks ? results.leftHandLandmarks.map((res) => [res.x, res.y, res.z]).flat() : Array(21 * 3).fill(0);
			const rightHand = results.rightHandLandmarks ? results.rightHandLandmarks.map((res) => [res.x, res.y, res.z]).flat() : Array(21 * 3).fill(0);
    		const keypoints = [...pose, ...face, ...leftHand, ...rightHand];
			return keypoints;
		};

		const handleHolisticResults = async (results: any) => {
			if (canvasRef.current && videoRef.current) {
				const canvasCtx = canvasRef.current.getContext('2d');
				canvasCtx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
				canvasCtx?.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height);
				if (results) {
					const keypoints = extractKeypoints(results);
					sequence.current.push(keypoints);
					console.log(sequence.current)
					if (sequence.current.length >= 50) {
						const seq = sequence.current
						try {
							const response = await axios.post('http://127.0.0.1:5000/predict', { seq });
							console.log(response)
							const predictedAction = response.data.word;
							if (sentence.current.length === 0 || sentence.current[sentence.current.length - 1] !== predictedAction) {
								sentence.current.push(predictedAction);
							}
							setPrediction(sentence.current.join(" "));
							sequence.current = [];
							console.log("reset seq", sequence.current)
						  } catch (error) {
							console.error("There was an error!", error);
						  }
						
					}
				}
			}
		};
		
		// Handle real-time camera processing
		const handleCameraStart = () => {
			setIsCameraOn(true);
			console.log(videoRef.current)
			if (videoRef.current) {
				console.log("open camera")
				cameraRef.current = new Camera(videoRef.current!, {
					onFrame: async () => {
						console.log("holistic", holisticRef.current)
						try {
							await holisticRef.current?.send({ image: videoRef.current! });
						} catch (error) {
							console.error("Error while sending data to Holistic:", error);
						}
					},
					width: 640,
					height: 480,
				});
				cameraRef.current.start();
			}
		};

		// Handle stopping the camera
		const handleCameraStop = () => {
			if (cameraRef.current) {
				cameraRef.current.stop();
			}
			if (videoRef.current && videoRef.current.srcObject) {
				const stream = videoRef.current.srcObject as MediaStream;
				stream.getTracks().forEach((track) => track.stop());
				videoRef.current.srcObject = null;
			}
			setIsCameraOn(false);
			setButtonClicked('');
			setPrediction('');
		};
	
		const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (file && uploadVideoRef.current) {
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
			canvas.width = 640;
			canvas.height = 480;
			const ctx = canvas.getContext('2d');
	
			const processFrame = () => {
				if (video.paused || video.ended) return;
	
				if (ctx) {
					ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
					const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				}
	
				requestAnimationFrame(processFrame);
			};
	
			processFrame();
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
									<div className="mt-4 text-lg">
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
										null	
								)}
								{/* Video and Canvas Elements for Camera Processing */}
								{isCameraOn && (
									<div>
										<video ref={videoRef} width="640" height="480" style={{ display: "none" }}/>
										<canvas ref={canvasRef} width="640" height="480" />
									</div>
								)}
								{/* Display prediction for camera */}
								
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
									className={`p-3 border border-gray-300 rounded-full ${buttonClicked === 'upload' ? 'bg-[#D2E3FC]' : ''
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
									className={`p-3 border border-gray-300 rounded-full ${buttonClicked === 'camera' ? 'bg-[#D2E3FC]' : ''
										}`}
									//onClick={startCamera}
									onClick={() => handleCameraButtonClick()}
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
						<div className="h-[300px] bg-white rounded-lg p-4 border border-gray-300 flex">
							{prediction ? (
									<div className="mt-4 text-lg">
										{/* <h3 className="text-lg font-bold">Prediction:</h3> */}
										<p>{prediction}</p>
									</div>
								) : <p className="text-gray-500">Processed Output Will Appear Here</p>}
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

