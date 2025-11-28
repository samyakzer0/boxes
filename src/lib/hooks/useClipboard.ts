import { useState, useCallback } from 'react';

export const useClipboard = (timeout = 2000) => {
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const copy = useCallback(
        async (text: string) => {
            try {
                if (navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(text);
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                }

                setCopied(true);
                setError(null);

                setTimeout(() => setCopied(false), timeout);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to copy';
                setError(message);
                console.error('Copy failed:', err);
            }
        },
        [timeout]
    );

    return { copy, copied, error };
};
