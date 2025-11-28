import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseClass = variant === 'primary'
        ? 'btn-neo-primary'
        : variant === 'secondary'
            ? 'btn-neo-secondary'
            : 'btn-neo-ghost';

    return (
        <button className={`${baseClass} ${className}`} {...props}>
            {children}
        </button>
    );
};
