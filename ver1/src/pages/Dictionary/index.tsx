// import $ from "jquery";
// import Bloodhound from "typeahead.js";
// import Layout from "Layout";
// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";

// interface IProps {
//   className?: string;
// }

// function Dictionary(props: IProps) {
//   function CleanUserSearchInput(element: { value: string }) {
//     const replacements: [RegExp, string][] = [
//       [/\./g, ""],
//       [/\,/g, ""],
//       [/\(/g, ""],
//       [/\)/g, ""],
//       [/\?/g, ""],
//       [/!/g, ""],
//       [/ \/ /g, " "],
//       [/\//g, " "],
//       [/\\\\/g, ""],
//       [/\_/g, " "],
//       [/   /g, " "], // remove triple spaces
//       [/  /g, " "], // remove double spaces
//     ];

//     replacements.forEach(([pattern, replacement]) => {
//       element.value = element.value.replace(pattern, replacement);
//     });
//   }

//   useEffect(() => {
//     const searchwords = new Bloodhound({
//       datumTokenizer: Bloodhound.tokenizers.whitespace,
//       queryTokenizer: Bloodhound.tokenizers.whitespace,
//       prefetch: "/wordsearch.php",
//       remote: {
//         url: "/wordsearch.php?query=%QUERY",
//         wildcard: "%QUERY",
//       },
//     });

//     $(".typeahead")
//       .typeahead(
//         { highlight: true },
//         {
//           name: "searchwords",
//           limit: 10,
//           source: searchwords,
//         }
//       )
//       .on("typeahead:selected", function (e: any) {
//         CleanUserSearchInput(
//           document.getElementById("word") as HTMLInputElement
//         );
//         e.target.form.submit();
//       });
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const inputElement = document.getElementById("word") as HTMLInputElement;
//     CleanUserSearchInput(inputElement);
//     e.currentTarget.submit();
//   };

//   return (
//     <Layout className={props.className}>
//       <div className="bg-[#F5F6FA]">
//         <div className="mx-auto">
//           <h1 className="text-4xl font-bold mb-6">Dictionary</h1>
//           <hr className="mb-6 border-gray-300" />
//           <p className="mb-4 text-lg">
//             Easily look up words and phrases in sign language.
//           </p>
//           <p className="mb-4 text-lg">
//             View corresponding videos that show the signs for searched terms.
//           </p>
//           <p className="mb-4 text-lg">
//             Provides resources for individuals in the deaf and mute community
//             and those looking to enhance their sign language skills.
//           </p>
//           <p className="mb-12 text-lg">
//             Hopefully these videos will help you learn and use sign language
//             better.
//           </p>
//           <hr className="mb-6 border-gray-300" />

//           <div className="padding-top:20px;">
//             <form action="word.php" method="get" onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
//                   <div className="input-group stylish-input-group">
//                     <input
//                       type="text"
//                       name="word"
//                       id="word"
//                       className="form-control input-lg typeahead"
//                       placeholder="Search word or phrase"
//                       autoComplete="off"
//                     />
//                     <span className="input-group-addon">
//                       <button type="submit" title="Search">
//                         <span className="glyphicon glyphicon-search"></span>
//                       </button>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Dictionary;

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
        <div className="mx-auto">
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
