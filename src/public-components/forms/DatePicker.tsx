import React from 'react';

export interface DatePickerProps {
    value?: string;
    onChange: (date: string) => void;
    min?: string;
    max?: string;
    disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    min,
    max,
    disabled = false
}) => {
    return (
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            disabled={disabled}
            className="px-4 py-3 border-3 border-neo-black font-bold w-full
                       focus:outline-none focus:ring-4 focus:ring-neo-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
        />
    );
};
