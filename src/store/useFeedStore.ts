

import { create } from "zustand";

interface FeedStoreState {
    selectedFeed: string | '';
    sort: string;
    search: string;

    // Actions to update the state
    setSelectedFeed: (feed: string | '') => void;
    setSort: (sortType: string) => void;
    setSearch: (query: string) => void;


}

const useFeedStore = create<FeedStoreState>((set) => ({
    // Initial states
    selectedFeed: '',
    sort: '',
    search: '',
    filters: {},

    // Actions to update states
    setSelectedFeed: (feed) => set({ selectedFeed: feed }),
    setSort: (sortType) => set({ sort: sortType }),
    setSearch: (query) => set({ search: query }),

}));

export default useFeedStore;
