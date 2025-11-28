import React from 'react';
import { X } from 'lucide-react';

export interface AnnouncementBannerProps {
    message: string;
    actionText?: string;
    onAction?: () => void;
    onClose?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
    message,
    actionText,
    onAction,
    onClose
}) => {
    return (
        <div className="border-b-3 border-neo-black bg-neo-black text-neo-white px-4 py-3">
            <div className="container-neo flex items-center justify-between gap-4">
                <p className="font-bold text-sm flex-1">{message}</p>
                <div className="flex items-center gap-3">
                    {actionText && onAction && (
                        <button
                            onClick={onAction}
                            className="px-4 py-2 bg-neo-white text-neo-black font-bold uppercase
                                       text-xs border-2 border-neo-white hover:bg-neo-gray-100
                                       transition-colors"
                        >
                            {actionText}
                        </button>
                    )}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-neo-gray-800 transition-colors"
                            aria-label="Close banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
