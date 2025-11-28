import React from 'react';

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface FeatureGridProps {
    features: Feature[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="border-3 border-neo-black bg-neo-white p-6 hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none shadow-neo transition-all"
                >
                    <div className="w-12 h-12 border-3 border-neo-black bg-neo-black text-neo-white
                                    flex items-center justify-center mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 uppercase">{feature.title}</h3>
                    <p className="text-neo-gray-700">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};
