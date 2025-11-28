import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    onClose?: () => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type = 'info',
    duration = 3000,
    onClose,
    position = 'top-right'
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose?.();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    if (!isVisible) return null;

    const icons = {
        success: CheckCircle,
        error: AlertCircle,
        info: Info,
        warning: AlertTriangle
    };

    const Icon = icons[type];

    const positionClasses = {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4'
    };

    return (
        <div
            className={`fixed ${positionClasses[position]} z-50 animate-slide-in`}
            role="alert"
        >
            <div className="flex items-center gap-3 px-6 py-4 bg-neo-white border-3 border-neo-black shadow-neo min-w-[300px] max-w-md">
                <Icon className="w-6 h-6 flex-shrink-0" />
                <p className="flex-1 font-bold text-sm">{message}</p>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose?.();
                    }}
                    className="flex-shrink-0 hover:bg-neo-gray-100 p-1 transition-colors"
                    aria-label="Close notification"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
