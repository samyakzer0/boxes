import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText: string;
    onCtaClick: () => void;
    secondaryCtaText?: string;
    onSecondaryCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    ctaText,
    onCtaClick,
    secondaryCtaText,
    onSecondaryCtaClick
}) => {
    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 text-center">
            <h1 className="text-2xl md:text-6xl font-display font-bold mb-3 uppercase">
                {title}
            </h1>
            <p className="text-sm md:text-xl text-neo-gray-700 mb-6 max-w-2xl mx-auto">
                {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                    onClick={onCtaClick}
                    className="px-6 py-2.5 bg-neo-black text-neo-white font-bold uppercase text-sm
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all
                               flex items-center justify-center gap-2"
                >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                </button>
                {secondaryCtaText && onSecondaryCtaClick && (
                    <button
                        onClick={onSecondaryCtaClick}
                        className="px-6 py-2.5 bg-neo-white text-neo-black font-bold uppercase text-sm
                                   border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                                   hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        {secondaryCtaText}
                    </button>
                )}
            </div>
        </div>
    );
};
