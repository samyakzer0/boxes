import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-bold uppercase mb-2">
                    {label}
                </label>
            )}
            <input
                className={`input-neo w-full ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1 font-bold">{error}</p>
            )}
        </div>
    );
};
