import React, { useState } from 'react';

export interface RangeSliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
    label?: string;
    showValue?: boolean;
    className?: string;
}

/**
 * Interactive range slider with custom neo-brutalist styling
 * 
 * @example
 * <RangeSlider min={0} max={100} label="Volume" showValue />
 */
export const RangeSlider: React.FC<RangeSliderProps> = ({
    min = 0,
    max = 100,
    step = 1,
    value: controlledValue,
    onChange,
    label,
    showValue = true,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState(min);
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (controlledValue === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold uppercase">{label}</label>
                    {showValue && (
                        <span className="text-sm font-bold">{value}</span>
                    )}
                </div>
            )}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className="w-full h-3 bg-neo-gray-200 border-3 border-neo-black appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                   [&::-webkit-slider-thumb]:bg-neo-black [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-neo-black
                   [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-neo-sm
                   [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-neo-black
                   [&::-moz-range-thumb]:border-3 [&::-moz-range-thumb]:border-neo-black
                   [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-neo-sm"
            />
        </div>
    );
};
