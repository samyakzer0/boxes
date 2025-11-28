import React, { useState } from 'react';

export interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

/**
 * Checkbox with neo-brutalist styling
 * 
 * @example
 * <Checkbox label="Accept terms" onChange={(checked) => console.log(checked)} />
 */
export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked: controlledChecked,
    onChange,
    disabled = false,
    className = '',
}) => {
    const [internalChecked, setInternalChecked] = useState(false);
    const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        if (controlledChecked === undefined) {
            setInternalChecked(newChecked);
        }
        onChange?.(newChecked);
    };

    return (
        <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    className="sr-only"
                />
                <div className={`w-6 h-6 border-3 border-neo-black bg-neo-white transition-all ${checked ? 'bg-neo-black' : ''}`}>
                    {checked && (
                        <svg className="w-full h-full text-neo-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    )}
                </div>
            </div>
            {label && <span className="font-bold text-sm">{label}</span>}
        </label>
    );
};
