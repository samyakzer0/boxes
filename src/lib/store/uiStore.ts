import { create } from 'zustand';

interface UIStore {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
    sortBy: 'name' | 'newest' | 'trending';
    setSortBy: (sort: 'name' | 'newest' | 'trending') => void;
}

export const useUIStore = create<UIStore>((set) => ({
    searchQuery: '',
    setSearchQuery: (query: string) => set({ searchQuery: query }),

    selectedCategories: [],
    setSelectedCategories: (categories: string[]) => set({ selectedCategories: categories }),

    sortBy: 'name',
    setSortBy: (sort: 'name' | 'newest' | 'trending') => set({ sortBy: sort }),
}));
