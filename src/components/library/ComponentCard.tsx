import React from 'react';
import type { ComponentPreview as ComponentPreviewType } from '@/lib/types/component';
import { Link } from 'react-router-dom';
import { Copy, Download, ArrowRight, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { downloadComponent } from '@/lib/utils/download';

export interface ComponentCardProps {
    component: ComponentPreviewType;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
    const { copy, copied } = useClipboard();
    const PreviewComponent = component.preview.component;
    const showPlaceholder = component.preview.previewOnClick || (component.preview.previewHeight && component.preview.previewHeight > 500);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        copy(component.codeRaw);
    };

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        downloadComponent(component);
    };

    return (
        <div className="card-neo overflow-hidden">
            {/* Preview Area */}
            <div
                className="h-[250px] bg-neo-gray-50 border-b-4 border-neo-black flex items-center justify-center p-6"
                style={{ minHeight: component.preview.previewHeight || 250 }}
            >
                {showPlaceholder ? (
                    <Link
                        to={`/components/${component.id}`}
                        className="w-full h-full flex flex-col items-center justify-center gap-4 group hover:bg-neo-gray-100 transition-colors"
                    >
                        <div className="w-20 h-20 border-4 border-neo-black bg-neo-white flex items-center justify-center
                                      group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-transform">
                            <Eye className="w-10 h-10 text-neo-black" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold uppercase text-neo-black mb-1">Click to Preview</p>
                            <p className="text-sm text-neo-gray-600">Component too large for card preview</p>
                        </div>
                    </Link>
                ) : (
                    <div className="w-full flex items-center justify-center">
                        {typeof PreviewComponent === 'function' && !component.preview.defaultProps ? (
                            <PreviewComponent />
                        ) : (
                            <PreviewComponent {...(component.preview.defaultProps || {})} />
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{component.title}</h3>
                        <p className="text-sm text-neo-gray-600">{component.description}</p>
                    </div>
                    {component.featured && (
                        <Badge variant="warning" className="ml-2">Featured</Badge>
                    )}
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                    {component.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="default" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="flex-1 px-4 py-2 border-2 border-neo-black bg-neo-white hover:bg-neo-gray-50 
                       font-bold text-sm uppercase transition-all flex items-center justify-center gap-2"
                        title="Copy code"
                    >
                        <Copy size={16} />
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-4 py-2 border-2 border-neo-black bg-neo-white hover:bg-neo-gray-50 
                       font-bold text-sm uppercase transition-all"
                        title="Download file"
                    >
                        <Download size={16} />
                    </button>
                    <Link
                        to={`/components/${component.id}`}
                        className="px-4 py-2 border-2 border-neo-black bg-neo-black text-neo-white hover:bg-neo-gray-800 
                       font-bold text-sm uppercase transition-all flex items-center gap-2"
                    >
                        View
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
