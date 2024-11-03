// import React, { useEffect, useRef } from "react";

// interface SearchBarProps {
//   query: string;
//   onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
//   suggestions: string[];
//   onSuggestionClick: (word: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   query,
//   onInputChange,
//   onKeyPress,
//   suggestions,
//   onSuggestionClick,
// }) => {
//   const suggestionRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       suggestionRef.current &&
//       !suggestionRef.current.contains(event.target as Node)
//     ) {
//       // Clear input using a synthetic input event
//       const syntheticEvent = {
//         target: { value: "" },
//       } as React.ChangeEvent<HTMLInputElement>;
//       onInputChange(syntheticEvent); // Clear input
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         value={query}
//         onChange={onInputChange}
//         onKeyPress={onKeyPress}
//         className="border rounded p-2 w-full"
//         placeholder="Search..."
//       />
//       <img
//         src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-128.png"
//         alt="Search"
//         className="w-6 h-6 absolute left-4 top-4"
//       />
//       {suggestions.length > 0 && (
//         <div
//           ref={suggestionRef}
//           className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded shadow-lg"
//         >
//           {suggestions.map((suggestion) => (
//             <div
//               key={suggestion}
//               onClick={() => onSuggestionClick(suggestion)}
//               className="p-2 hover:bg-gray-200 cursor-pointer"
//             >
//               {suggestion}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

import React, { useEffect, useRef } from "react";

const Nana = () => {
  return (
    <div className="relative">
      <img
        src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-128.png"
        alt="Search"
        className="w-6 h-6 absolute left-4 top-4"
      />
    </div>
  );
};

export default Nana;
