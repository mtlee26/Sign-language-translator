import React, { useState, useEffect } from "react";
import SearchBar from "components/Searchbar";
import Layout from "Layout";
import { GlossEntry } from "types";
import { parseGlossary } from "utils";

interface IProps {
  className?: string;
}

function Dictionary(props: IProps) {
  const [glossary, setGlossary] = useState<{ [key: string]: number }>({});
  const [data, setData] = useState<GlossEntry[]>([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedGloss, setSelectedGloss] = useState<GlossEntry | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch("/data/WLASL_v0.3.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load JSON file");
        return response.json();
      })
      .then((json) => {
        console.log("JSON data loaded:", json);
        setData(json);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setLoadError("Could not load dictionary data. Please check the file path and try again.");
      });
  }, []);

  useEffect(() => {
    fetch("/data/wlasl_class_list.txt")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to load glossary file: ${response.statusText}`);
        return response.text();
      })
      .then((text) => setGlossary(parseGlossary(text)))
      .catch((error) => {
        console.error("Error loading glossary data:", error);
        setLoadError("Could not load glossary data.");
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedGloss(null);
    setNotFound(false);

    if (value) {
      const matches = Object.keys(glossary).filter((word) =>
        word.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (word: string) => {
    const entry = data.find((item) => item.gloss === word);
    setSelectedGloss(entry || null);
    setQuery(word);
    setSuggestions([]);
    setNotFound(!entry);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSuggestionClick(query);
    }
  };

  const handleVideoError = (url: string) => {
    setVideoErrors((prevErrors) => ({ ...prevErrors, [url]: true }));
  };

  const renderVideo = (url: string) => {
    if (videoErrors[url]) {
      return null; 
    }

    // Kiểm tra nếu là video YouTube và trích xuất videoId
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";
      if (url.includes("youtube.com")) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get("v") || "";
      } else if (url.includes("youtu.be")) {
        videoId = url.split("/").pop() || "";
      }

      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return (
          <iframe
            width="400"
            height="300"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'auto' }}
            onError={() => handleVideoError(url)}
            title={`YouTube video player - ${videoId}`} 
          ></iframe>
        );
      }
    } else {
      return (
        <video
          controls
          className="w-full h-auto max-w-[400px]"
          onError={() => handleVideoError(url)}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <Layout>
      <div className="bg-[#F5F6FA]">
        <div className="mx-auto w-full">
          <h1 className="text-4xl font-bold mb-6">Dictionary</h1>
          <hr className="mb-6 border-gray-300" />
          <p className="mb-4 text-lg">Easily look up words and phrases in sign language.</p>
          <p className="mb-4 text-lg">View corresponding videos that show the signs for searched terms.</p>
          <p className="mb-4 text-lg">Provides resources for individuals in the deaf and mute community and those looking to enhance their sign language skills.</p>
          <p className="mb-12 text-lg">Hopefully these videos will help you learn and use sign language better.</p>
          <hr className="mb-6 border-gray-300" />
          <div className="relative mb-6">
            <SearchBar
              query={query}
              onInputChange={handleInputChange}
              onKeyPress={handleKeyPress}
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>

          {notFound ? (
            <p className="text-lg text-red-500">No results found for "{query}". Please try another term.</p>
          ) : selectedGloss ? (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">{selectedGloss.gloss}</h2>
              {loadError && <p className="text-red-500">{loadError}</p>}
              <div className="grid grid-cols-2 gap-3">
                {selectedGloss.instances
                  .filter(instance => !videoErrors[instance.url]) 
                  .map(instance => (
                    <div key={instance.instance_id} className="flex justify-center">
                      {renderVideo(instance.url)}
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}

export default Dictionary;
