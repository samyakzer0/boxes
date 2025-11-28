import React from 'react';

export interface StatusBadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    className?: string;
}

/**
 * Status/category badge component with color variants
 * 
 * @example
 * <StatusBadge variant="success">Active</StatusBadge>
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
    children,
    variant = 'default',
    className = '',
}) => {
    const variantClasses = {
        default: 'bg-neo-gray-100 border-neo-black text-neo-black',
        success: 'bg-green-100 border-green-600 text-green-800',
        error: 'bg-red-100 border-red-600 text-red-800',
        warning: 'bg-yellow-100 border-yellow-600 text-yellow-800',
        info: 'bg-blue-100 border-blue-600 text-blue-800',
    };

    return (
        <span
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider
                 border-2 border-neo-black inline-block
                 ${variantClasses[variant]} ${className}`}
        >
            {children}
        </span>
    );
};
