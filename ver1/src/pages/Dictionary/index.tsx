import SearchBar from "components/Searchbar";
import Layout from "Layout";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

function Dictionary(props: IProps) {
  const handleSearch = (query: string) => {
    console.log("User searched for:", query);
    // Thực hiện tìm kiếm ở đây (nếu cần)
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

          <div className="mb-96">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dictionary;
