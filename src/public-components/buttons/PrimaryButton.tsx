import React from 'react';

export interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

/**
 * Primary action button with neo-brutalist styling
 * 
 * @example
 * <PrimaryButton onClick={() => alert('Clicked!')}>Submit</PrimaryButton>
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    disabled = false,
    className = '',
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 bg-neo-black text-neo-white font-bold uppercase tracking-wider
               border-3 border-neo-black shadow-neo
               hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm
               active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150 ${className}`}
    >
        {children}
    </button>
);
