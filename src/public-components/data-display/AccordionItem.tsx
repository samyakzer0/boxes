import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

/**
 * Accordion item with collapsible content
 * 
 * @example
 * <AccordionItem title="What is Boxes?">
 *   Boxes is a neo-brutalist component library.
 * </AccordionItem>
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    defaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-3 border-neo-black bg-neo-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between font-bold uppercase text-left
                   hover:bg-neo-gray-50 transition-colors"
            >
                <span>{title}</span>
                <ChevronDown
                    size={24}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="px-6 py-4 border-t-3 border-neo-black">
                    {children}
                </div>
            )}
        </div>
    );
};
