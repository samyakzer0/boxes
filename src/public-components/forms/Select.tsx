import React from 'react';

export interface SelectProps {
    label?: string;
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

/**
 * Select dropdown with neo-brutalist styling
 * 
 * @example
 * <Select 
 *   label="Country" 
 *   options={[{value: 'us', label: 'United States'}, {value: 'uk', label: 'United Kingdom'}]}
 * />
 */
export const Select: React.FC<SelectProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select an option',
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
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={disabled}
                    className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black font-bold
                     appearance-none cursor-pointer
                     focus:outline-none focus:ring-0 focus:shadow-neo
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-150"
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
