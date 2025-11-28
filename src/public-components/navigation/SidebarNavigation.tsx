

export interface SidebarItem {
    icon: React.ReactNode;
    label: string;
    href: string;
    active?: boolean;
}

export interface SidebarNavigationProps {
    items: SidebarItem[];
    onItemClick?: (item: SidebarItem) => void;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
    items,
    onItemClick
}) => {
    return (
        <nav className="w-64 border-r-4 border-neo-black bg-neo-white h-full">
            <div className="p-6">
                <h2 className="text-2xl font-bold uppercase mb-6">Navigation</h2>
                <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (onItemClick) {
                                        e.preventDefault();
                                        onItemClick(item);
                                    }
                                }}
                                className={`flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm
                                           transition-all ${item.active
                                        ? 'bg-neo-black text-neo-white'
                                        : 'hover:bg-neo-gray-100'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
