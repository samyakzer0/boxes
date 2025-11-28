import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';
import { Button } from '@/components/ui/Button';

export interface ClipboardCopyProps {
    code: string;
    label?: string;
}

export const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ code, label = 'Copy Code' }) => {
    const { copy, copied } = useClipboard();

    return (
        <Button
            variant="secondary"
            onClick={() => copy(code)}
            className="w-full flex items-center justify-center gap-2"
        >
            {copied ? (
                <>
                    <Check size={20} />
                    Copied!
                </>
            ) : (
                <>
                    <Copy size={20} />
                    {label}
                </>
            )}
        </Button>
    );
};
