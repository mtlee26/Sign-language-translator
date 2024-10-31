import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
    setResults(mockSearch(newQuery));
  };

  const handleSelect = (word: string) => {
    setQuery(word);
    setSelectedWord(word);
    setResults([]);
    fetchVideo(word);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query) {
      handleSelect(query);
    }
  };

  const mockSearch = (query: string) => {
    if (query.length < 1) return [];
    const dictionary = [
      "apple",
      "banana",
      "apricot",
      "blueberry",
      "blackberry",
    ];
    return dictionary.filter((word) => word.includes(query.toLowerCase()));
  };

  const fetchVideo = (word: string) => {
    // Giả lập tìm kiếm video
    const videoDatabase: { [key: string]: string } = {
      apple: "https://example.com/apple-video.mp4",
      banana: "https://example.com/banana-video.mp4",
    };

    if (videoDatabase[word]) {
      setVideoUrl(videoDatabase[word]);
      setErrorMessage(null);
    } else {
      setVideoUrl(null);
      setErrorMessage(`Sorry, we couldn't find a video for "${word}".`);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search for a word..."
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      {results.length > 0 && (
        <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
          {results.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(result)}
            >
              {result}
            </div>
          ))}
        </div>
      )}

      {videoUrl && (
        <div className="mt-4">
          <video controls className="w-full">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-4 text-3xl font-semibold">
            {selectedWord}
          </p>
        </div>
      )}

      {errorMessage && (
        <p className="mt-20 text-center text-bold text-red-500 text-2xl">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
