import React from 'react';

export interface CodeViewerProps {
    code: string;
    showLineNumbers?: boolean;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
    code,
    showLineNumbers = false
}) => {
    const lines = code.split('\n');

    return (
        <div className="relative font-mono text-sm">
            <pre className="overflow-x-auto p-4 bg-neo-white text-neo-black border-2 border-neo-gray-300">
                <code className="block whitespace-pre">
                    {showLineNumbers ? (
                        lines.map((line, index) => (
                            <div key={index} className="flex">
                                <span className="inline-block w-12 text-neo-gray-500 select-none text-right pr-4 border-r border-neo-gray-300 mr-4">
                                    {index + 1}
                                </span>
                                <span className="flex-1">{line}</span>
                            </div>
                        ))
                    ) : (
                        code
                    )}
                </code>
            </pre>
        </div>
    );
};
