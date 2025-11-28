import React, { useState } from 'react';
import { Folder, File, ChevronRight, ChevronDown } from 'lucide-react';

export interface FileTreeNode {
    name: string;
    type: 'file' | 'folder';
    children?: FileTreeNode[];
}

export interface FileTreeProps {
    data: FileTreeNode[];
    onSelect?: (node: FileTreeNode) => void;
}

const TreeNode: React.FC<{
    node: FileTreeNode;
    level: number;
    onSelect?: (node: FileTreeNode) => void;
}> = ({ node, level, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className={`flex items-center gap-2 py-2 px-3 hover:bg-neo-gray-100 cursor-pointer
                           transition-colors`}
                style={{ paddingLeft: `${level * 20 + 12}px` }}
                onClick={() => {
                    if (node.type === 'folder') {
                        setIsOpen(!isOpen);
                    }
                    onSelect?.(node);
                }}
            >
                {node.type === 'folder' && (
                    isOpen ? (
                        <ChevronDown className="w-4 h-4 flex-shrink-0" />
                    ) : (
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    )
                )}
                {node.type === 'folder' ? (
                    <Folder className="w-5 h-5 flex-shrink-0" />
                ) : (
                    <File className="w-5 h-5 flex-shrink-0 ml-4" />
                )}
                <span className="font-mono text-sm">{node.name}</span>
            </div>
            {node.type === 'folder' && isOpen && node.children && (
                <div>
                    {node.children.map((child, index) => (
                        <TreeNode
                            key={index}
                            node={child}
                            level={level + 1}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const FileTree: React.FC<FileTreeProps> = ({ data, onSelect }) => {
    return (
        <div className="border-3 border-neo-black bg-neo-white">
            {data.map((node, index) => (
                <TreeNode key={index} node={node} level={0} onSelect={onSelect} />
            ))}
        </div>
    );
};
