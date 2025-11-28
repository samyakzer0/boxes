import React from 'react';
import type { PropDocumentation } from '@/lib/types/component';

export interface PropsTableProps {
    props: PropDocumentation[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
    return (
        <div className="border-4 border-neo-black overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-neo-black text-neo-white">
                        <th className="px-4 py-3 text-left font-bold uppercase text-sm">Prop</th>
                        <th className="px-4 py-3 text-left font-bold uppercase text-sm">Type</th>
                        <th className="px-4 py-3 text-left font-bold uppercase text-sm">Default</th>
                        <th className="px-4 py-3 text-left font-bold uppercase text-sm">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((prop, index) => (
                        <tr
                            key={prop.name}
                            className={`border-t-3 border-neo-black ${index % 2 === 0 ? 'bg-neo-white' : 'bg-neo-gray-50'}`}
                        >
                            <td className="px-4 py-3">
                                <code className="font-mono font-bold text-sm">
                                    {prop.name}
                                    {prop.required && <span className="text-red-500 ml-1">*</span>}
                                </code>
                            </td>
                            <td className="px-4 py-3">
                                <code className="font-mono text-sm text-neo-gray-600">{prop.type}</code>
                            </td>
                            <td className="px-4 py-3">
                                <code className="font-mono text-sm text-neo-gray-600">
                                    {prop.default || '-'}
                                </code>
                            </td>
                            <td className="px-4 py-3 text-sm">{prop.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
