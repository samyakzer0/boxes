import React from 'react';
import { Check } from 'lucide-react';

export interface PricingCardProps {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted?: boolean;
    onSelect: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    name,
    price,
    period,
    features,
    highlighted = false,
    onSelect
}) => {
    return (
        <div
            className={`border-4 border-neo-black p-8 ${highlighted ? 'bg-neo-black text-neo-white' : 'bg-neo-white'
                }`}
        >
            <h3 className="text-2xl font-bold uppercase mb-2">{name}</h3>
            <div className="mb-6">
                <span className="text-5xl font-bold">{price}</span>
                <span className={`text-sm ml-2 ${highlighted ? 'text-neo-gray-300' : 'text-neo-gray-600'}`}>
                    /{period}
                </span>
            </div>
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={onSelect}
                className={`w-full px-6 py-3 font-bold uppercase border-3 transition-all ${highlighted
                        ? 'bg-neo-white text-neo-black border-neo-white'
                        : 'bg-neo-black text-neo-white border-neo-black'
                    } shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
            >
                Get Started
            </button>
        </div>
    );
};
