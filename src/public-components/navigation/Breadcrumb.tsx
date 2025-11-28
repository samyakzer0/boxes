import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-bold uppercase">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <ChevronRight className="w-4 h-4 text-neo-gray-500" />}
                    {item.href ? (
                        <a
                            href={item.href}
                            className="text-neo-gray-600 hover:text-neo-black hover:underline"
                        >
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-neo-black">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
