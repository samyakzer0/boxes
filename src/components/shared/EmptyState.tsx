import React from 'react';
import { Search } from 'lucide-react';

export interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    description,
    icon = <Search size={48} />
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-neo-gray-400 mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            {description && (
                <p className="text-neo-gray-600 max-w-md">{description}</p>
            )}
        </div>
    );
};
