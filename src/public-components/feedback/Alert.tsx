import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

/**
 * Alert component with different variants
 * 
 * @example
 * <Alert variant="success" title="Success!">Your changes have been saved.</Alert>
 */
export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    children,
    onClose,
    className = '',
}) => {
    const variants = {
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-600',
            text: 'text-blue-800',
            icon: Info,
        },
        success: {
            bg: 'bg-green-50',
            border: 'border-green-600',
            text: 'text-green-800',
            icon: CheckCircle,
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-600',
            text: 'text-yellow-800',
            icon: AlertTriangle,
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-600',
            text: 'text-red-800',
            icon: AlertCircle,
        },
    };

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <div className={`${config.bg} border-3 ${config.border} p-4 ${className}`}>
            <div className="flex items-start gap-3">
                <Icon className={`${config.text} flex-shrink-0`} size={24} />
                <div className="flex-1">
                    {title && (
                        <h4 className={`font-bold text-sm uppercase mb-1 ${config.text}`}>
                            {title}
                        </h4>
                    )}
                    <div className={`text-sm ${config.text}`}>{children}</div>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className={`${config.text} hover:opacity-70 transition-opacity flex-shrink-0`}
                        aria-label="Close alert"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};
