'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
    question: string;
    answer: string;
}

export default function Accordion({ items }: { items: AccordionItemProps[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div>
            {items.map((item, idx) => (
                <div key={idx} className={styles.item}>
                    <button className={styles.trigger} onClick={() => toggle(idx)}>
                        {item.question}
                        {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openIndex === idx && (
                        <div className={styles.content}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
