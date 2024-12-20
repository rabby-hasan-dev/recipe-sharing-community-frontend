"use client";

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { SearchIcon } from "@/src/components/icons";
import { useGetAllRecipeBySearch } from "@/src/hooks/receipeHooks";
import { useSearch } from "@/src/context/searchState";

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch recipe with the searchTerm
  const { data: allRecipe, refetch } = useGetAllRecipeBySearch({
    searchTerm: searchQuery,
  });

  const recipes = allRecipe?.data;

  useEffect(() => {
    const debounce = setTimeout(() => {
      refetch();
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery, refetch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Ctrl + K key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full">
      <Input
        ref={inputRef}
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden md:flex" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        radius="full"
        size="md"
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setIsDropdownOpen(true);
        }}
        onFocus={() => setIsDropdownOpen(true)}
      />

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isDropdownOpen && searchQuery && (
          <motion.div
            ref={dropdownRef}
            animate={{ opacity: 1, y: 0 }}
            className="absolute w-full mt-2 bg-default-50 border border-default-200 rounded-lg shadow-lg z-50 max-h-60 overflow-auto scrollbar-hide"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {recipes?.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 p-2">
                {recipes.map((recipe: any) => (
                  <Link
                    key={recipe._id}
                    className="py-2 px-4 text-sm cursor-pointer hover:bg-default-100 rounded-md border border-default-100"
                    href={`/recipe-feeds/${recipe?._id}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {recipe.title}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-sm text-default-500">
                No recipes found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
