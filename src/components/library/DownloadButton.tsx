import React from 'react';
import { Download } from 'lucide-react';
import type { ComponentPreview } from '@/lib/types/component';
import { downloadComponent } from '@/lib/utils/download';
import { Button } from '@/components/ui/Button';

export interface DownloadButtonProps {
    component: ComponentPreview;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ component }) => {
    return (
        <Button
            variant="secondary"
            onClick={() => downloadComponent(component)}
            className="w-full flex items-center justify-center gap-2"
        >
            <Download size={20} />
            Download {component.filename}
        </Button>
    );
};
