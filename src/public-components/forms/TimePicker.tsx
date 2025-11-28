import React from 'react';

export interface TimePickerProps {
    value?: string;
    onChange: (time: string) => void;
    disabled?: boolean;
}

export const TimePicker: React.FC<TimePickerProps> = ({
    value,
    onChange,
    disabled = false
}) => {
    return (
        <input
            type="time"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className="px-4 py-3 border-3 border-neo-black font-bold w-full
                       focus:outline-none focus:ring-4 focus:ring-neo-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
        />
    );
};
