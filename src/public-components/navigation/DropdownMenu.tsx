import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownMenuItem {
    label: string;
    value: string;
    onClick?: () => void;
}

export interface DropdownMenuProps {
    trigger: React.ReactNode;
    items: DropdownMenuItem[];
    align?: 'left' | 'right';
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    trigger,
    items,
    align = 'left'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 border-3 border-neo-black bg-neo-white
                           font-bold uppercase text-sm shadow-neo hover:translate-x-[2px]
                           hover:translate-y-[2px] hover:shadow-none transition-all"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {trigger}
                <ChevronDown
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className={`absolute top-full mt-2 min-w-[200px] border-3 border-neo-black
                               bg-neo-white shadow-neo z-50 ${align === 'right' ? 'right-0' : 'left-0'
                        }`}
                >
                    {items.map((item, index) => (
                        <button
                            key={item.value}
                            onClick={() => {
                                item.onClick?.();
                                setIsOpen(false);
                            }}
                            className={`w-full px-6 py-3 text-left font-bold text-sm
                                       hover:bg-neo-black hover:text-neo-white transition-colors ${index < items.length - 1 ? 'border-b-2 border-neo-gray-300' : ''
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
