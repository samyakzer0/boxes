import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps {
    onToggle?: (isDark: boolean) => void;
    initialDark?: boolean;
    className?: string;
}

/**
 * Interactive dark/light mode toggle switch
 * 
 * @example
 * <ThemeToggle onToggle={(isDark) => console.log('Theme:', isDark ? 'dark' : 'light')} />
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    onToggle,
    initialDark = false,
    className = '',
}) => {
    const [isDark, setIsDark] = useState(initialDark);

    const handleToggle = () => {
        const newState = !isDark;
        setIsDark(newState);
        onToggle?.(newState);
    };

    return (
        <button
            onClick={handleToggle}
            className={`p-3 bg-neo-white border-3 border-neo-black shadow-neo-sm
                 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                 transition-all duration-150 ${className}`}
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun size={20} className="text-neo-black" />
            ) : (
                <Moon size={20} className="text-neo-black" />
            )}
        </button>
    );
};
