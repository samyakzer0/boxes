import React from 'react';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const variantClasses = {
        default: 'bg-neo-gray-100 border-neo-black',
        success: 'bg-green-100 border-green-600',
        error: 'bg-red-100 border-red-600',
        warning: 'bg-yellow-100 border-yellow-600',
        info: 'bg-blue-100 border-blue-600',
    };

    return (
        <span className={`badge-neo ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    );
};
