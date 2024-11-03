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

  const [loadError, setLoadError] = useState<string | null>(null);

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
        setLoadError(
          "Could not load dictionary data. Please check the file path and try again."
        );
      });
  }, []);

  useEffect(() => {
    // Tải glossary
    fetch("/data/wlasl_class_list.txt")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Failed to load glossary file: ${response.statusText}`
          );
        return response.text();
      })
      .then((text) => setGlossary(parseGlossary(text)))
      .catch((error) => {
        console.error("Error loading glossary data:", error);
        setLoadError("Could not load glossary data.");
      });

    // Tải JSON data
    fetch("/data/WLASL_v0.3.json")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to load JSON file: ${response.statusText}`);
        return response.json();
      })
      .then((json) => {
        console.log("JSON data loaded:", json);
        setData(json);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setLoadError(
          "Could not load dictionary data. Please check the file path and try again."
        );
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Đặt lại selectedGloss khi nhập từ mới
    setSelectedGloss(null);

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
    console.log("Selected entry:", entry); // Kiểm tra kết quả khi chọn từ gợi ý
    setSelectedGloss(entry || null);
    setQuery(word);
    setSuggestions([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSuggestionClick(query);
    }
  };

  return (
    <Layout>
      <div className="bg-[#F5F6FA]">
        <div className="mx-auto w-full">
          <h1 className="text-4xl font-bold mb-6">Dictionary</h1>
          <hr className="mb-6 border-gray-300" />
          <p className="mb-4 text-lg">
            Easily look up words and phrases in sign language.
          </p>
          <p className="mb-4 text-lg">
            View corresponding videos that show the signs for searched terms.
          </p>
          <p className="mb-4 text-lg">
            Provides resources for individuals in the deaf and mute community
            and those looking to enhance their sign language skills.
          </p>
          <p className="mb-12 text-lg">
            Hopefully these videos will help you learn and use sign language
            better.
          </p>
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

          {selectedGloss && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">{selectedGloss.gloss}</h2>
              <h2>
                {loadError && <p className="text-red-500">{loadError}</p>}
              </h2>
              <div className={`grid grid-cols-2 gap-3`}>
                {selectedGloss.instances.map((instance) => (
                  <div
                    key={instance.instance_id}
                    className="flex justify-center"
                  >
                    <video controls className="w-full h-auto max-w-[400px]">
                      {" "}
                      {/* Điều chỉnh kích thước video */}
                      <source src={instance.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dictionary;
