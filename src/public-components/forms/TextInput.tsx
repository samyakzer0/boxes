import React, { useState } from 'react';

export interface TextInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    disabled?: boolean;
    className?: string;
}

/**
 * Text input with validation states and neo-brutalist styling
 * 
 * @example
 * <TextInput label="Email" placeholder="Enter your email" />
 */
export const TextInput: React.FC<TextInputProps> = ({
    label,
    placeholder,
    value: controlledValue,
    onChange,
    error,
    disabled = false,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (controlledValue === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-bold uppercase mb-2">
                    {label}
                </label>
            )}
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black
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
