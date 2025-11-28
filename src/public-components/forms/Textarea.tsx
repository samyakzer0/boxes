import React from 'react';

export interface TextareaProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    rows?: number;
    error?: string;
    disabled?: boolean;
    className?: string;
}

/**
 * Textarea with neo-brutalist styling
 * 
 * @example
 * <Textarea label="Message" placeholder="Enter your message" rows={4} />
 */
export const Textarea: React.FC<TextareaProps> = ({
    label,
    placeholder,
    value,
    onChange,
    rows = 4,
    error,
    disabled = false,
    className = '',
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-bold uppercase mb-2">
                    {label}
                </label>
            )}
            <textarea
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={`w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black
                   resize-none
                   focus:outline-none focus:ring-0 focus:border-neo-black focus:shadow-neo
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-150
                   ${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1 font-bold">{error}</p>
            )}
        </div>
    );
};
