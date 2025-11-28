import React from 'react';

export interface ToggleSwitchProps {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false
}) => {
    return (
        <label className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => !disabled && onChange(e.target.checked)}
                    disabled={disabled}
                    className="sr-only"
                />
                <div
                    className={`w-14 h-8 border-3 border-neo-black transition-colors ${checked ? 'bg-neo-black' : 'bg-neo-white'
                        }`}
                >
                    <div
                        className={`w-6 h-6 border-2 border-neo-black bg-neo-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        style={{ marginTop: '1px', marginLeft: '1px' }}
                    />
                </div>
            </div>
            {label && <span className="font-bold">{label}</span>}
        </label>
    );
};
