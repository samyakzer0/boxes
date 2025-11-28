import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
}

export interface TableProps {
    columns: TableColumn[];
    data: Record<string, any>[];
    striped?: boolean;
}

export const Table: React.FC<TableProps> = ({
    columns,
    data,
    striped = false
}) => {
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: 'asc' | 'desc';
    } | null>(null);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    return (
        <div className="border-3 border-neo-black overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="border-b-3 border-neo-black bg-neo-black text-neo-white">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-6 py-4 text-left font-bold uppercase text-sm"
                            >
                                {column.sortable ? (
                                    <button
                                        onClick={() => handleSort(column.key)}
                                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                    >
                                        {column.label}
                                        {sortConfig?.key === column.key && (
                                            sortConfig.direction === 'asc' ? (
                                                <ArrowUp className="w-4 h-4" />
                                            ) : (
                                                <ArrowDown className="w-4 h-4" />
                                            )
                                        )}
                                    </button>
                                ) : (
                                    column.label
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`border-b border-neo-gray-300 last:border-b-0 ${striped && rowIndex % 2 === 1 ? 'bg-neo-gray-50' : 'bg-neo-white'
                                } hover:bg-neo-gray-100 transition-colors`}
                        >
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className="px-6 py-4 text-sm"
                                >
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
