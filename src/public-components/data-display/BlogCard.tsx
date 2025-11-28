import React from 'react';

export interface BlogCardProps {
    title: string;
    description: string;
    image?: string;
    author?: string;
    date?: string;
    onClick?: () => void;
    className?: string;
}

/**
 * Blog post card with image, title, description, and metadata
 * 
 * @example
 * <BlogCard 
 *   title="Getting Started with Boxes"
 *   description="Learn how to use neo-brutalist components"
 *   author="John Doe"
 *   date="2025-01-01"
 * />
 */
export const BlogCard: React.FC<BlogCardProps> = ({
    title,
    description,
    image,
    author,
    date,
    onClick,
    className = '',
}) => {
    return (
        <div
            className={`border-4 border-neo-black bg-neo-white shadow-neo
                 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-md
                 transition-all duration-150 cursor-pointer ${className}`}
            onClick={onClick}
        >
            {image && (
                <div className="w-full h-48 bg-neo-gray-200 border-b-4 border-neo-black overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-neo-gray-600 mb-4">{description}</p>
                {(author || date) && (
                    <div className="flex items-center gap-4 text-sm text-neo-gray-500">
                        {author && <span className="font-bold">{author}</span>}
                        {date && <span>{date}</span>}
                    </div>
                )}
            </div>
        </div>
    );
};
