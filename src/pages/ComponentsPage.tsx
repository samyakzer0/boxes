import React from 'react';
import { ComponentGrid } from '@/components/library/ComponentGrid';
import { SearchBar } from '@/components/library/SearchBar';
import { useComponentSearch } from '@/lib/hooks/useComponentSearch';
import { EmptyState } from '@/components/shared/EmptyState';

const CATEGORIES = [
    { id: 'buttons', name: 'Buttons' },
    { id: 'forms', name: 'Forms' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'utilities', name: 'Utilities' },
    { id: 'data-display', name: 'Data Display' },
    { id: 'feedback', name: 'Feedback' },
    { id: 'modals', name: 'Modals' },
    { id: 'misc', name: 'Misc' },
];

export const ComponentsPage: React.FC = () => {
    const {
        results,
        searchQuery,
        setSearchQuery,
        selectedCategories,
        setSelectedCategories,
        sortBy,
        setSortBy,
    } = useComponentSearch();

    const toggleCategory = (category: string) => {
        setSelectedCategories(
            selectedCategories.includes(category)
                ? selectedCategories.filter((c) => c !== category)
                : [...selectedCategories, category]
        );
    };

    return (
        <div className="container-neo py-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-display font-bold mb-2">Components</h1>
                <p className="text-lg text-neo-gray-600">
                    Explore our collection of {results.length} neo-brutalist React components
                </p>
            </div>

            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search components..."
                />

                <div className="flex gap-4 items-center flex-wrap">
                    <div className="flex gap-2 flex-wrap flex-1">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => toggleCategory(category.id)}
                                className={`px-4 py-2 border-2 border-neo-black font-bold uppercase text-sm transition-all
                  ${selectedCategories.includes(category.id)
                                        ? 'bg-neo-black text-neo-white'
                                        : 'bg-neo-white text-neo-black hover:bg-neo-gray-50'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="px-4 py-2 border-3 border-neo-black bg-neo-white font-bold uppercase text-sm
                       focus:outline-none focus:shadow-neo"
                    >
                        <option value="name">Sort: Name</option>
                        <option value="newest">Sort: Newest</option>
                        <option value="trending">Sort: Trending</option>
                    </select>

                    {selectedCategories.length > 0 && (
                        <button
                            onClick={() => setSelectedCategories([])}
                            className="px-4 py-2 border-2 border-neo-black bg-neo-white hover:bg-neo-gray-50 
                         font-bold uppercase text-sm transition-all"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
                <p className="text-sm font-bold uppercase text-neo-gray-600">
                    Showing {results.length} component{results.length !== 1 ? 's' : ''}
                </p>
            </div>

            {/* Grid */}
            {results.length > 0 ? (
                <ComponentGrid components={results} />
            ) : (
                <EmptyState
                    title="No components found"
                    description="Try adjusting your search or filters"
                />
            )}
        </div>
    );
};
