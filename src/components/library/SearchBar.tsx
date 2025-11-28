import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = 'Search components...'
}) => {
    return (
        <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neo-gray-500" size={20} />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-12 pr-12 py-4 border-3 border-neo-black bg-neo-white text-neo-black
                   font-bold placeholder:text-neo-gray-400
                   focus:outline-none focus:shadow-neo
                   transition-all duration-150"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neo-gray-500 hover:text-neo-black"
                    aria-label="Clear search"
                >
                    <X size={20} />
                </button>
            )}
        </div>
    );
};
