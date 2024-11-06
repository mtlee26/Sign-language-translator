import React, { useState, useEffect, useCallback } from "react";
import Layout from "Layout";

interface GlossEntry {
  gloss: string;
  instances: {
    url: string;
  }[];
}

function Game() {
  const [data, setData] = useState<GlossEntry[]>([]);
  const [selectedGloss, setSelectedGloss] = useState<GlossEntry | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [message, setMessage] = useState<React.ReactNode>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false); 

  useEffect(() => {
    fetch("/data/WLASL_v0.3.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  const pickNewVideo = useCallback(() => {
    if (data.length === 0) return;

    const validEntries = data.filter((entry) =>
      entry.instances.some((instance) => instance.url.endsWith(".mp4") || instance.url.endsWith(".swf"))
    );

    if (validEntries.length === 0) {
      setMessage("No valid video available. Please try again later.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * validEntries.length);
    const glossEntry = validEntries[randomIndex];
    setSelectedGloss(glossEntry);

    const mp4Instance = glossEntry.instances.find((instance) =>
        instance.url.endsWith(".mp4") || instance.url.endsWith(".swf")
    );
    if (mp4Instance) {
      setCurrentVideo(mp4Instance.url);
    }

    const correctWord = glossEntry.gloss;
    const optionsList = [correctWord];

    while (optionsList.length < 4) {
      const randomWord = data[Math.floor(Math.random() * data.length)].gloss;
      if (!optionsList.includes(randomWord)) {
        optionsList.push(randomWord);
      }
    }

    setOptions(optionsList.sort(() => Math.random() - 0.5));
    setSelectedOption(null);
    setMessage("");
    setIsAnswered(false); // Reset answer status when picking a new video
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      pickNewVideo();
    }
  }, [data, pickNewVideo]);

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const checkAnswer = () => {
    if (selectedOption === selectedGloss?.gloss) {
      setMessage("Correct! 🎉");
    } else {
      setMessage(
        <span>
          Incorrect! The correct answer is:{" "}
          <span className="text-green-500">{selectedGloss?.gloss}</span>. ❌
        </span>
      );
    }
    setIsAnswered(true); 
  };
  

  return (
    <Layout>
      <div className="bg-[#F5F6FA]">
        <div className="mx-auto w-full max-w-5xl p-6">
          <h1 className="text-4xl font-bold mb-6">Guess the Sign Game</h1>
          <hr className="mb-6 border-gray-300" />
          <p className="mb-4 text-lg">Watch the sign language video carefully and try to guess the correct word that is being expressed in the video. </p>
          <p className="mb-6 text-lg">After watching the video, select one of the options below that you believe corresponds to the word shown in the video.</p>
          <hr className="mb-6 border-gray-300" />

          {/* Display video */}
          {currentVideo ? (
            <div className="mb-6 flex justify-center">
              <video
                controls
                src={currentVideo}
                width="400"
                className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <p className="text-center text-red-500">No video found.</p>
          )}

          {/* Display options */}
          <div className="flex flex-wrap justify-center mb-6 space-x-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered} // Disable option buttons after checking answer
                className={`p-2 text-lg font-semibold rounded shadow ${
                  selectedOption === option
                    ? "bg-blue-500 text-white" // Highlight selected option
                    : "bg-black text-white"
                } ${selectedOption} ${message && option === selectedGloss?.gloss && "bg-green-600"} 
                    ${message && option !== selectedGloss?.gloss && option === selectedOption ? "bg-red-600" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Check answer and new question buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={checkAnswer}
              disabled={!selectedOption}
              className="p-3 bg-green-600 text-white font-semibold rounded shadow"
            >
              Check Answer
            </button>
            <button
              onClick={pickNewVideo}
              className="p-3 bg-yellow-600 text-white font-semibold rounded shadow"
            >
              Another Question
            </button>
          </div>

          {/* Display result message */}
          {message && (
            <p className="text-center text-lg font-medium mt-4">
              {message}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Game;
