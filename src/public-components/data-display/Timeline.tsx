import React from 'react';

export interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

export interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="space-y-8">
            {items.map((item, index) => (
                <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 border-3 border-neo-black bg-neo-black" />
                        {index < items.length - 1 && (
                            <div className="w-0.5 flex-1 bg-neo-black mt-2" style={{ minHeight: '60px' }} />
                        )}
                    </div>
                    <div className="flex-1 pb-8">
                        <div className="text-sm font-bold text-neo-gray-600 mb-1">{item.date}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-neo-gray-700">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
