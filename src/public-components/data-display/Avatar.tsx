import React from 'react';

export interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

/**
 * Avatar component with fallback initials
 * 
 * @example
 * <Avatar src="/user.jpg" alt="John Doe" fallback="JD" size="lg" />
 */
export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    fallback = '?',
    size = 'md',
    className = '',
}) => {
    const sizes = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-sm',
        lg: 'w-16 h-16 text-base',
        xl: 'w-24 h-24 text-xl',
    };

    return (
        <div className={`${sizes[size]} border-3 border-neo-black bg-neo-gray-200 flex items-center justify-center overflow-hidden ${className}`}>
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <span className="font-bold uppercase">{fallback}</span>
            )}
        </div>
    );
};
