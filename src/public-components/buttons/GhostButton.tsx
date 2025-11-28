import React from 'react';

export interface GhostButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

/**
 * Ghost button with transparent background and border only
 * 
 * @example
 * <GhostButton onClick={() => console.log('Clicked')}>Learn More</GhostButton>
 */
export const GhostButton: React.FC<GhostButtonProps> = ({
    children,
    onClick,
    disabled = false,
    className = '',
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 bg-transparent text-neo-black font-bold uppercase tracking-wider
               border-3 border-neo-black
               hover:bg-neo-gray-50
               active:bg-neo-gray-100
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150 ${className}`}
    >
        {children}
    </button>
);
