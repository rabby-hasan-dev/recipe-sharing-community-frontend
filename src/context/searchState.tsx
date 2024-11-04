"use client";

import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

// Define the shape of the context values
interface ISearchProviderValues {
    searchQuery: string | null;
    setSearchQuery: Dispatch<SetStateAction<string | null>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// Create the context with an undefined initial value
export const SearchContext = createContext<ISearchProviderValues | undefined>(undefined);

// Create a provider component
const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, isLoading, setIsLoading }}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hook to access the context
export const useSearch = (): ISearchProviderValues => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};

export default SearchProvider;
