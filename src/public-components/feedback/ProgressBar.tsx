import React from 'react';

export interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    variant?: 'default' | 'success' | 'warning' | 'error';
    className?: string;
}

/**
 * Progress bar with neo-brutalist styling
 * 
 * @example
 * <ProgressBar value={75} label="Upload Progress" showPercentage />
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    max = 100,
    label,
    showPercentage = false,
    variant = 'default',
    className = '',
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const variantColors = {
        default: 'bg-neo-black',
        success: 'bg-green-600',
        warning: 'bg-yellow-600',
        error: 'bg-red-600',
    };

    return (
        <div className={`w-full ${className}`}>
            {(label || showPercentage) && (
                <div className="flex items-center justify-between mb-2">
                    {label && <span className="text-sm font-bold uppercase">{label}</span>}
                    {showPercentage && (
                        <span className="text-sm font-bold">{Math.round(percentage)}%</span>
                    )}
                </div>
            )}
            <div className="w-full h-6 bg-neo-gray-200 border-3 border-neo-black overflow-hidden">
                <div
                    className={`h-full ${variantColors[variant]} transition-all duration-300 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};
