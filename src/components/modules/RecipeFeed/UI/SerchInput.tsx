"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@nextui-org/input";

const SearchInput = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  return (
    <div className="flex items-center justify-center w-full max-w-md transition-all duration-300 ease-in-out">
      <div
        className={`relative flex items-center w-full ${isInputVisible ? "md:max-w-md" : "md:max-w-xs"}`}
      >
        {/* Mobile Search Icon */}
        <button
          aria-label="Toggle Search"
          className={`md:hidden text-gray-300 focus:outline-none transition-transform ${
            isInputVisible ? "hidden" : "block"
          }`}
          onClick={() => setIsInputVisible(!isInputVisible)}
        >
          <SearchIcon className="w-6 h-6" />
        </button>

        {/* Search Input for Desktop and Expanded Mobile */}
        {isInputVisible && (
          <Input
            autoFocus
            isClearable
            aria-label="Search"
            className="rounded-lg w-full"
            placeholder="Search Recipe"
            startContent={<SearchIcon className="text-gray-400" />}
            onBlur={() => setIsInputVisible(false)}
          />
        )}

        {/* Search Input for Desktop */}
        <div className="hidden md:flex md:w-full">
          <Input
            isClearable
            aria-label="Search"
            className="rounded-lg w-full"
            placeholder="Search Recipe"
            startContent={<SearchIcon className="text-gray-400" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
