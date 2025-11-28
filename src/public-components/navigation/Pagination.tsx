import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center gap-1.5">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border-3 border-neo-black bg-neo-white font-bold uppercase text-xs
                           hover:bg-neo-gray-50 disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                           transition-all disabled:hover:translate-x-0 disabled:hover:translate-y-0
                           disabled:hover:shadow-neo"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1.5">
                {getPageNumbers().map((page, index) => (
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-1.5 border-3 border-neo-black font-bold text-xs
                                       shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] 
                                       hover:shadow-none transition-all ${currentPage === page
                                    ? 'bg-neo-black text-neo-white'
                                    : 'bg-neo-white hover:bg-neo-gray-50'
                                }`}
                            aria-label={`Page ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="px-2 font-bold text-sm text-neo-gray-500">
                            {page}
                        </span>
                    )
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border-3 border-neo-black bg-neo-white font-bold uppercase text-xs
                           hover:bg-neo-gray-50 disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                           transition-all disabled:hover:translate-x-0 disabled:hover:translate-y-0
                           disabled:hover:shadow-neo"
                aria-label="Next page"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
};
