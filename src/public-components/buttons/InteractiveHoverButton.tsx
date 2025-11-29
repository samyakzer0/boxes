import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const InteractiveHoverButton: React.FC<InteractiveHoverButtonProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`group relative w-auto cursor-pointer overflow-hidden border-3 border-neo-black bg-neo-white p-2 px-6 text-center font-bold uppercase shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all ${className}`}
            {...props}
        >
            <div className="flex items-center gap-2">
                <div className="h-3 w-3 border-2 border-neo-black bg-neo-black transition-all duration-500 group-hover:scale-[50]"></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-neo-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="font-bold uppercase">{children}</span>
                <ArrowRight className="w-5 h-5" />
            </div>
        </button>
    );
};

export const InteractiveHoverButtonDemo: React.FC = () => {
    return (
        <div className="flex items-center justify-center p-8">
            <InteractiveHoverButton>
                Hover Me
            </InteractiveHoverButton>
        </div>
    );
};
