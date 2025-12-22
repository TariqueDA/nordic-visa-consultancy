import styles from './ComparisonTable.module.css';

interface Column {
    header: string;
    accessor: string;
}

interface DataItem {
    [key: string]: string | number | boolean;
}

interface ComparisonTableProps {
    columns: Column[];
    data: DataItem[];
    title?: string;
}

export default function ComparisonTable({ columns, data, title }: ComparisonTableProps) {
    return (
        <div style={{ marginBottom: '2rem' }}>
            {title && <h3 style={{ marginBottom: '1rem' }}>{title}</h3>}
            <div className={styles.container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={col.accessor}>{col.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {columns.map((col) => (
                                    <td key={`${index}-${col.accessor}`}>
                                        {row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
