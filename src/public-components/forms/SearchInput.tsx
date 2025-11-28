import React from 'react';
import { Search } from 'lucide-react';

export interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    onSearch?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    placeholder = 'Search...',
    onSearch
}) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch();
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="w-full px-4 py-3 pl-12 border-3 border-neo-black font-bold
                           placeholder:text-neo-gray-500 focus:outline-none focus:ring-4
                           focus:ring-neo-gray-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-600" />
        </div>
    );
};
