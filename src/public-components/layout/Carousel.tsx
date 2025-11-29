import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    autoPlay = false,
    interval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % items.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, items.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    return (
        <div className="relative border-4 border-neo-black bg-neo-white">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-neo-white
                           border-3 border-neo-black shadow-neo 
                           hover:shadow-neo-sm active:shadow-none transition-shadow"
                aria-label="Previous"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-neo-white
                           border-3 border-neo-black shadow-neo 
                           hover:shadow-neo-sm active:shadow-none transition-shadow"
                aria-label="Next"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 border-2 border-neo-black transition-colors ${index === currentIndex ? 'bg-neo-black' : 'bg-neo-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
