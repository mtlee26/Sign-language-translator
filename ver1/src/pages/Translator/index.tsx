import Layout from "Layout";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useSpeechRecognition from "hooks/useSpeechRecognitionHook";
import SignLanguageDetector from "model";

interface IProps {
  className?: string;
}

function Translator(props: IProps) {
  const { text: recognizedText, isListening, startListening, stopListening, setIsAdding, resetText } = useSpeechRecognition();
  const [text, setText] = useState("");
  const [mode, setMode] = useState("textToASL");
  const [buttonClicked, setButtonClicked] = useState("upload");
  const [isAddingMode, setIsAddingMode] = useState(false); 
  const [soundButtonClicked, setSoundButtonClicked] = useState(false); 
  const history = useHistory();


  useEffect(() => {
    if (recognizedText) {
      setText(recognizedText);
    }
  }, [recognizedText]);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (location.pathname === "/translate") {
        setMode("textToASL");
        setButtonClicked("upload");
        setSoundButtonClicked(false);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    setText("");
    setButtonClicked("upload");
    setSoundButtonClicked(false);
    resetText();
  }, [mode]);

  const handleVoiceInputClick = () => {
    if (isListening) {
      stopListening();
      setIsAddingMode(true);
      resetText();
    } else {
      startListening();
      setIsAdding(true);
      setIsAddingMode(false);
    }
  };

  const handleSoundClick = () => {
    setSoundButtonClicked((prev) => {
      const newState = !prev; 
      if (newState) {
        speakText(); 
      } else {
        setIsAddingMode(false);
        stopListening(); 
      }
      return newState; 
    });
  };
  
  const speakText = () => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      if (isListening) {
        stopListening();
      }
      utterance.onend = () => {
        setSoundButtonClicked(false); 
      };
  
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Layout>
      <div className="bg-[#F5F6FA]">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-6">Translator</h1>
          <hr className="mb-6 border-gray-300" />
          <p className="mb-4 text-lg">
            Text to Sign Language: Converts written text into accurate sign
            language animations, enabling easy understanding for
            hearing-impaired users.
          </p>
          <p className="mb-12 text-lg">
            Sign Language to Text: Users can express sign language through a
            camera, which is recognized and converted back into text.
          </p>
          <hr className="mb-6 border-gray-300" />

          <div className="bg-[#ffffff] p-4">
            <div className="flex space-x-6 mb-12">
              <button
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg ${
                  mode === "textToASL" ? "bg-[#D2E3FC] text-[#1A73E8]" : "border border-gray-300"
                }`}
                onClick={() => setMode("textToASL")}
              >
                <img
                  src="https://cdn0.iconfinder.com/data/icons/tuts/128/google_translate.png"
                  alt="Text to ASL"
                  className="w-8 h-8"
                />
                <span className="text-lg">Translate Text to ASL</span>
              </button>
              <button
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg ${
                  mode === "ASLToText" ? "bg-[#D2E3FC] text-[#1A73E8]" : "border border-gray-300"
                }`}
                onClick={() => setMode("ASLToText")}
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-4/24/Translate-128.png"
                  alt="ASL to Text"
                  className="w-8 h-8"
                />
                <span className="text-lg">Translate ASL to Text</span>
              </button>
            </div>

            {mode === "textToASL" ? (
              <div className="flex space-x-6">
                <div className="w-[580px] bg-white border border-gray-300 rounded-lg p-6">
                  <textarea
                    className="w-full h-[300px] p-4 border border-gray-300 rounded-lg text-lg"
                    placeholder="Enter text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                  <div className="flex justify-between mt-6">
                    <div className="flex space-x-4">
                      <button
                        className={`p-3 border rounded-full ${
                          isListening ? "bg-blue-500 text-white" : "border-gray-300"
                        }`}
                        onClick={handleVoiceInputClick}
                      >
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/random-icon-set/512/microphone-128.png"
                          alt="Listening"
                          className="w-6 h-6"
                        />
                      </button>
                      <button
                        className={`p-3 border border-gray-300 rounded-full ${
                          soundButtonClicked ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={handleSoundClick}
                      >
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/system-basic-vol-5/20/icon-speaker-loudness-sound-2-128.png"
                          alt="Speaking"
                          className="w-6 h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[580px] bg-[#F5F7FD] rounded-lg p-6 border border-gray-300">
                  <div className="h-[300px] bg-white rounded-lg p-4 border border-gray-300">
                    {/* Translation output will go here */}
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
            ) : (
				<div className="App">
      <SignLanguageDetector />
    </div>
             /*  <div className="flex space-x-6">
                <div className="w-[580px] bg-white border border-gray-300 rounded-lg p-6">
                  {buttonClicked === "upload" ? (
                    <div className="flex flex-col items-center justify-center h-[300px] border border-gray-300 rounded-lg text-lg">
                      <h2 className="text-2xl mb-1">Choose a video</h2>
                      <h3>Upload a .mp4, .ogv or .webm</h3>
                      <br />
                      <button className="bg-[#1A73E8] text-[#ffffff] px-6 py-3 rounded-lg font-bold">
                        BROWSE YOUR COMPUTER
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px] border border-gray-300 rounded-lg text-lg">
                      <h2 className="text-2xl mb-1">Camera is off</h2>
                      <br />
                      <button className="bg-[#1A73E8] text-[#ffffff] px-6 py-3 rounded-lg font-bold">
                        OPEN YOUR CAMERA
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between mt-6">
                    <div className="flex space-x-4">
                      <button
                        className="p-3 border border-gray-300 rounded-full"
                        onClick={() => setButtonClicked("upload")}
                      >
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/glyphpack/40/upload-128.png"
                          alt="Upload"
                          className="w-6 h-6"
                        />
                      </button>
                      <button
                        className="p-3 border border-gray-300 rounded-full"
                        onClick={() => setButtonClicked("camera")}
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

                <div className="w-[580px] bg-[#F5F7FD] rounded-lg p-6 border border-gray-300">
                  <div className="h-[300px] bg-white rounded-lg p-4 border border-gray-300"></div>
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
              </div> */
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Translator;
