export interface ComponentPreview {
    id: string;
    title: string;
    description: string;
    category:
    | 'buttons'
    | 'forms'
    | 'navigation'
    | 'layout'
    | 'utilities'
    | 'data-display'
    | 'feedback'
    | 'modals'
    | 'marketing'
    | 'media'
    | 'auth'
    | 'misc';
    tags: string[];

    // Code
    code: string; // Formatted code for display
    codeRaw: string; // Raw code for download/copy
    dependencies: string[];

    // Preview
    preview: {
        component: React.ComponentType<any>;
        defaultProps?: Record<string, any>;
        previewHeight?: number;
        previewWidth?: number;
        responsive?: boolean;
        previewOnClick?: boolean; // Show click to preview placeholder instead of rendering
    };

    // Docs
    documentation?: {
        usage: string;
        props: PropDocumentation[];
        notes?: string;
    };

    // Metadata
    filename: string;
    folder: string;
    createdAt: Date;
    updatedAt: Date;
    author?: string;
    trending?: boolean;
    featured?: boolean;
}

export interface PropDocumentation {
    name: string;
    type: string;
    description: string;
    default?: string;
    required?: boolean;
}

export interface ComponentCategory {
    id: string;
    name: string;
    description: string;
    count: number;
}
