import { useMemo } from 'react';
import { useUIStore } from '@/lib/store/uiStore';
import type { ComponentPreview } from '@/lib/types/component';
import { COMPONENTS } from '@/lib/constants/components';

export const useComponentSearch = () => {
    const { searchQuery, setSearchQuery, selectedCategories, setSelectedCategories, sortBy, setSortBy } = useUIStore();

    const results = useMemo(() => {
        let filtered = [...COMPONENTS];

        // Text search across title, description, tags
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (comp) =>
                    comp.title.toLowerCase().includes(query) ||
                    comp.description.toLowerCase().includes(query) ||
                    comp.tags.some((tag) => tag.toLowerCase().includes(query))
            );
        }

        // Category filtering
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((comp) =>
                selectedCategories.includes(comp.category)
            );
        }

        // Sorting
        if (sortBy === 'newest') {
            filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        } else if (sortBy === 'trending') {
            filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        } else {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        return filtered;
    }, [searchQuery, selectedCategories, sortBy]);

    return {
        results,
        searchQuery,
        setSearchQuery,
        selectedCategories,
        setSelectedCategories,
        sortBy,
        setSortBy,
    };
};
