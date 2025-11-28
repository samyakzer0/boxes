import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const DocsPage: React.FC = () => {
    return (
        <div className="container-neo py-12">
            <h1 className="text-4xl font-display font-bold mb-8">Documentation</h1>

            <div className="max-w-3xl space-y-12">
                {/* Getting Started */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                    <p className="text-lg text-neo-gray-600 mb-4">
                        Boxes is a collection of neo-brutalist React components that you can copy and paste into your projects.
                    </p>
                </section>

                {/* Installation */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Installation</h2>
                    <p className="text-neo-gray-600 mb-4">
                        There's no package to install. Simply browse the components, copy the code, and paste it into your project.
                    </p>
                    <div className="border-3 border-neo-black bg-neo-gray-900 text-neo-white p-6 mb-4">
                        <code className="font-mono text-sm">
                            # Install Tailwind CSS if you haven't already<br />
                            npm install -D tailwindcss postcss autoprefixer<br />
                            npx tailwindcss init -p
                        </code>
                    </div>
                </section>

                {/* Tailwind Configuration */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Tailwind Configuration</h2>
                    <p className="text-neo-gray-600 mb-4">
                        Add the neo-brutalist theme to your Tailwind config:
                    </p>
                    <div className="border-3 border-neo-black bg-neo-gray-900 text-neo-white p-6 overflow-x-auto">
                        <pre className="font-mono text-sm">
                            {`module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-md': '6px 6px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
}`}
                        </pre>
                    </div>
                </section>

                {/* Usage */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Usage</h2>
                    <ol className="list-decimal list-inside space-y-2 text-neo-gray-600">
                        <li>Browse the component library</li>
                        <li>Click on a component to view details</li>
                        <li>Copy the component code</li>
                        <li>Paste it into your project</li>
                        <li>Customize as needed</li>
                    </ol>
                </section>

                {/* Dependencies */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Dependencies</h2>
                    <p className="text-neo-gray-600 mb-4">
                        Most components only require React and Tailwind CSS. Some components may require additional dependencies like:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neo-gray-600">
                        <li><code className="font-mono">lucide-react</code> - For icons</li>
                        <li><code className="font-mono">framer-motion</code> - For animations (optional)</li>
                    </ul>
                </section>

                {/* CTA */}
                <section className="pt-8 border-t-3 border-neo-black">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <Link to="/components">
                        <Button variant="primary">Browse Components</Button>
                    </Link>
                </section>
            </div>
        </div>
    );
};
