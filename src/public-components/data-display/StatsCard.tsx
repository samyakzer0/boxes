import React from 'react';

export interface StatsCardProps {
    label: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
}

export const StatsCard: React.FC<StatsCardProps> = ({
    label,
    value,
    change,
    changeType = 'neutral'
}) => {
    return (
        <div className="border-3 border-neo-black bg-neo-white p-6">
            <div className="text-sm font-bold text-neo-gray-600 uppercase mb-2">{label}</div>
            <div className="text-4xl font-bold mb-2">{value}</div>
            {change && (
                <div className={`text-sm font-bold ${changeType === 'positive' ? 'text-neo-black' :
                        changeType === 'negative' ? 'text-neo-gray-600' :
                            'text-neo-gray-500'
                    }`}>
                    {change}
                </div>
            )}
        </div>
    );
};
