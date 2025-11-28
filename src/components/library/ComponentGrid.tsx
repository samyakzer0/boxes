import React from 'react';
import type { ComponentPreview } from '@/lib/types/component';
import { ComponentCard } from './ComponentCard';

export interface ComponentGridProps {
    components: ComponentPreview[];
}

export const ComponentGrid: React.FC<ComponentGridProps> = ({ components }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component) => (
                <ComponentCard key={component.id} component={component} />
            ))}
        </div>
    );
};
