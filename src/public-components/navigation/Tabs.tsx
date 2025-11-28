import React, { useState } from 'react';

export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

/**
 * Tabs component for organizing content
 * 
 * @example
 * <Tabs tabs={[
 *   {id: 'tab1', label: 'Overview', content: <div>Overview content</div>},
 *   {id: 'tab2', label: 'Details', content: <div>Details content</div>}
 * ]} />
 */
export const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultTab,
    className = '',
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <div className={`w-full ${className}`}>
            {/* Tab Headers */}
            <div className="flex border-b-3 border-neo-black">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 font-bold uppercase text-sm border-r-3 border-neo-black last:border-r-0
                       transition-colors
                       ${activeTab === tab.id
                                ? 'bg-neo-black text-neo-white'
                                : 'bg-neo-white text-neo-black hover:bg-neo-gray-50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 border-3 border-neo-black border-t-0 bg-neo-white">
                {activeContent}
            </div>
        </div>
    );
};
