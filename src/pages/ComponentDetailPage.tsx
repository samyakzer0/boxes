import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPONENTS } from '@/lib/constants/components';
import { CodeViewer } from '@/components/library/CodeViewer';
import { ClipboardCopy } from '@/components/library/ClipboardCopy';
import { DownloadButton } from '@/components/library/DownloadButton';
import { PropsTable } from '@/components/library/PropsTable';
import { Badge } from '@/components/ui/Badge';
import { ChevronRight, Eye, Code2, BookOpen } from 'lucide-react';

export const ComponentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const component = COMPONENTS.find((c) => c.id === id);
    const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'usage'>('preview');

    if (!component) {
        return (
            <div className="container-neo py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Component Not Found</h1>
                    <p className="text-neo-gray-600 mb-8">Sorry, we couldn't find that component.</p>
                    <Link to="/components" className="btn-neo-primary">
                        Back to Components
                    </Link>
                </div>
            </div>
        );
    }

    const PreviewComponent = component.preview.component;

    const tabs = [
        { id: 'preview' as const, label: 'Preview', icon: Eye },
        { id: 'code' as const, label: 'Code', icon: Code2 },
        { id: 'usage' as const, label: 'Usage', icon: BookOpen },
    ];

    return (
        <div className="container-neo py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm font-bold uppercase text-neo-gray-600">
                <Link to="/" className="hover:text-neo-black hover:underline">Home</Link>
                <ChevronRight size={16} />
                <Link to="/components" className="hover:text-neo-black hover:underline">Components</Link>
                <ChevronRight size={16} />
                <span className="text-neo-black">{component.category}</span>
                <ChevronRight size={16} />
                <span className="text-neo-black">{component.title}</span>
            </div>

            {/* Header */}
            <div className="mb-12 p-6 border-4 border-neo-black bg-neo-gray-50">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-4xl font-display font-bold mb-2">{component.title}</h1>
                        <p className="text-lg text-neo-gray-600">{component.description}</p>
                    </div>
                    <div className="flex gap-2">
                        {component.featured && (
                            <Badge variant="warning">Featured</Badge>
                        )}
                        {component.trending && (
                            <Badge variant="error">Trending</Badge>
                        )}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                    {component.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 mb-8 border-4 border-neo-black overflow-hidden bg-neo-white">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-bold uppercase transition-colors ${index < tabs.length - 1 ? 'border-r-4 border-neo-black' : ''
                            } ${activeTab === tab.id
                                ? 'bg-neo-black text-neo-white'
                                : 'hover:bg-neo-gray-50'
                            }`}
                    >
                        <tab.icon className="w-5 h-5" />
                        {tab.label}
                    </button>
                ))}</div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    {/* Preview Tab */}
                    {activeTab === 'preview' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 uppercase">Live Preview</h2>
                            <div
                                className="border-4 border-neo-black bg-neo-gray-50 p-12 flex items-center justify-center"
                                style={{ minHeight: component.preview.previewHeight || 300 }}
                            >
                                <PreviewComponent {...(component.preview.defaultProps || {})} />
                            </div>
                        </div>
                    )}

                    {/* Code Tab */}
                    {activeTab === 'code' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4 uppercase">Component Code</h2>
                            <div className="border-3 border-neo-black max-h-[600px] overflow-y-auto">
                                <CodeViewer code={component.codeRaw} language="typescript" showLineNumbers={true} />
                            </div>
                        </div>
                    )}

                    {/* Usage Tab */}
                    {activeTab === 'usage' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6 uppercase">How to Use This Component</h2>

                            {/* Step 1 */}
                            <div className="border-3 border-neo-black bg-neo-white p-6 mb-4">
                                <h3 className="text-lg font-bold mb-3">Step 1: Copy the Component File</h3>
                                <p className="text-neo-gray-700 mb-3">First, you need to save this code in your project:</p>
                                <ol className="list-decimal list-inside space-y-2 text-neo-gray-700 ml-4">
                                    <li>Create a new file called <code className="px-2 py-1 bg-neo-gray-100 border border-neo-gray-300 font-mono text-sm">{component.id}.tsx</code> in your project</li>
                                    <li>Copy the code from the <strong>Code tab</strong> above</li>
                                    <li>Paste it into your new file and save</li>
                                </ol>
                            </div>

                            {/* Step 2 */}
                            <div className="border-3 border-neo-black bg-neo-white p-6 mb-6">
                                <h3 className="text-lg font-bold mb-3">Step 2: Use It in Your Page</h3>
                                <p className="text-neo-gray-700 mb-3">Here's a simple example:</p>
                                {component.documentation?.usage ? (
                                    <div className="bg-neo-gray-50 border-2 border-neo-gray-300">
                                        <CodeViewer code={component.documentation.usage} language="typescript" />
                                    </div>
                                ) : (
                                    <div className="bg-neo-gray-50 border-2 border-neo-gray-300">
                                        <CodeViewer
                                            code={`import { ${component.title.replace(/\s+/g, '')} } from './${component.id}';\n\nfunction MyPage() {\n  return (\n    <div>\n      <${component.title.replace(/\s+/g, '')} />\n    </div>\n  );\n}`}
                                            language="typescript"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Props */}
                            {component.documentation?.props && component.documentation.props.length > 0 && (
                                <div className="border-3 border-neo-black bg-neo-white p-6 mb-6">
                                    <h3 className="text-lg font-bold mb-3">Available Props</h3>
                                    <p className="text-neo-gray-700 mb-4">You can customize this component with these props:</p>
                                    <PropsTable props={component.documentation.props} />
                                </div>
                            )}

                            {/* Dependencies */}
                            {component.dependencies.length > 0 && (
                                <div className="border-3 border-neo-black bg-neo-white p-6 mb-6">
                                    <h3 className="text-lg font-bold mb-3"> Install Dependencies</h3>
                                    <p className="text-neo-gray-700 mb-3">This component needs these packages:</p>
                                    <div className="bg-neo-gray-900 text-neo-white p-4 border-2 border-neo-black font-mono text-sm">
                                        npm install {component.dependencies.join(' ')}
                                    </div>
                                </div>
                            )}

                            {/* Tips */}
                            {component.documentation?.notes && (
                                <div className="border-3 border-neo-black bg-neo-gray-50 p-6">
                                    <h3 className="text-lg font-bold mb-3">💡 Tips</h3>
                                    <p className="text-neo-gray-700">{component.documentation.notes}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Sidebar - Actions */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-4 uppercase">Quick Actions</h2>
                    <div className="space-y-3 mb-8">
                        <ClipboardCopy code={component.codeRaw} />
                        <DownloadButton component={component} />
                    </div>

                    {/* Component Info */}
                    <div className="border-3 border-neo-black bg-neo-white p-6">
                        <h3 className="font-bold mb-4 uppercase">Component Info</h3>
                        <dl className="space-y-3 text-sm">
                            <div>
                                <dt className="font-bold text-neo-gray-600 mb-1">Category</dt>
                                <dd className="font-mono">{component.category}</dd>
                            </div>
                            {component.dependencies.length > 0 && (
                                <div>
                                    <dt className="font-bold text-neo-gray-600 mb-1">Dependencies</dt>
                                    <dd className="font-mono text-xs space-y-1">
                                        {component.dependencies.map((dep) => (
                                            <div key={dep} className="px-2 py-1 bg-neo-gray-100 border border-neo-gray-300">
                                                {dep}
                                            </div>
                                        ))}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};
