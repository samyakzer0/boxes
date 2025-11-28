import React, { useRef, useState } from 'react';
import { Upload, X, File } from 'lucide-react';

export interface FileUploadProps {
    onFileSelect: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // in MB
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    accept,
    multiple = false,
    maxSize = 10
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
        }
    };

    const handleFiles = (files: File[]) => {
        const validFiles = files.filter(file => {
            const sizeMB = file.size / (1024 * 1024);
            return sizeMB <= maxSize;
        });

        setSelectedFiles(prev => multiple ? [...prev, ...validFiles] : validFiles);
        onFileSelect(validFiles);
    };

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-3 border-dashed cursor-pointer p-12 text-center transition-colors ${isDragging
                        ? 'border-neo-black bg-neo-gray-100'
                        : 'border-neo-gray-400 bg-neo-white hover:bg-neo-gray-50'
                    }`}
            >
                <Upload className="w-12 h-12 mx-auto mb-4 text-neo-gray-600" />
                <p className="font-bold mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-neo-gray-600">
                    {accept || 'Any file type'} (Max {maxSize}MB)
                </p>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileInput}
                    className="hidden"
                />
            </div>

            {selectedFiles.length > 0 && (
                <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between px-4 py-3 border-2 border-neo-black bg-neo-white"
                        >
                            <div className="flex items-center gap-3">
                                <File className="w-5 h-5" />
                                <div>
                                    <p className="font-bold text-sm">{file.name}</p>
                                    <p className="text-xs text-neo-gray-600">
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                }}
                                className="p-1 hover:bg-neo-gray-100 transition-colors"
                                aria-label="Remove file"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
