import React from 'react';
import { Check } from 'lucide-react';

export interface PricingTier {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted?: boolean;
}

export interface PricingSectionProps {
    tiers: PricingTier[];
    onSelectPlan: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
    tiers,
    onSelectPlan
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
                <div
                    key={tier.name}
                    className={`border-4 border-neo-black p-8 ${tier.highlighted ? 'bg-neo-black text-neo-white' : 'bg-neo-white'
                        }`}
                >
                    <h3 className="text-2xl font-bold uppercase mb-2">{tier.name}</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className={`text-sm ${tier.highlighted ? 'text-neo-gray-300' : 'text-neo-gray-600'}`}>
                            /{tier.period}
                        </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => onSelectPlan(tier.name)}
                        className={`w-full px-6 py-3 font-bold uppercase border-3 transition-all ${tier.highlighted
                                ? 'bg-neo-white text-neo-black border-neo-white'
                                : 'bg-neo-black text-neo-white border-neo-black'
                            } shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
                    >
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
    );
};
