import React from 'react';
import { Check, X } from 'lucide-react';

export interface ComparisonFeature {
    name: string;
    basic: boolean | string;
    pro: boolean | string;
    enterprise: boolean | string;
}

export interface ComparisonTableProps {
    features: ComparisonFeature[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ features }) => {
    return (
        <div className="border-3 border-neo-black overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b-3 border-neo-black">
                        <th className="px-6 py-4 text-left font-bold uppercase bg-neo-white">Feature</th>
                        <th className="px-6 py-4 text-center font-bold uppercase bg-neo-gray-50 border-l-2 border-neo-gray-300">Basic</th>
                        <th className="px-6 py-4 text-center font-bold uppercase bg-neo-black text-neo-white border-l-2 border-neo-black">Pro</th>
                        <th className="px-6 py-4 text-center font-bold uppercase bg-neo-gray-50 border-l-2 border-neo-gray-300">Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr
                            key={index}
                            className={`border-b border-neo-gray-300 last:border-b-0 ${index % 2 === 0 ? 'bg-neo-white' : 'bg-neo-gray-50'
                                }`}
                        >
                            <td className="px-6 py-4 font-bold">{feature.name}</td>
                            <td className="px-6 py-4 text-center border-l-2 border-neo-gray-300">
                                {typeof feature.basic === 'boolean' ? (
                                    feature.basic ? <Check className="w-5 h-5 mx-auto" /> : <X className="w-5 h-5 mx-auto text-neo-gray-400" />
                                ) : (
                                    <span className="font-bold">{feature.basic}</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-center border-l-2 border-neo-black">
                                {typeof feature.pro === 'boolean' ? (
                                    feature.pro ? <Check className="w-5 h-5 mx-auto" /> : <X className="w-5 h-5 mx-auto text-neo-gray-400" />
                                ) : (
                                    <span className="font-bold">{feature.pro}</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-center border-l-2 border-neo-gray-300">
                                {typeof feature.enterprise === 'boolean' ? (
                                    feature.enterprise ? <Check className="w-5 h-5 mx-auto" /> : <X className="w-5 h-5 mx-auto text-neo-gray-400" />
                                ) : (
                                    <span className="font-bold">{feature.enterprise}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
