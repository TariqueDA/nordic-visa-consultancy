import styles from '../page.module.css';
import Accordion from '@/components/ui/Accordion';
import faqData from '@/data/faqs.json';

export const metadata = {
    title: 'FAQs | Nordic Visa Consultancy',
    description: 'Frequently asked questions about studying and working in Europe.',
};

export default function FAQsPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '800px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Common queries from students and professionals.
                    </p>
                </div>

                <div className={styles.card} style={{ border: 'none', boxShadow: 'none', padding: '0' }}>
                    <Accordion items={faqData} />
                </div>
            </div>
        </div>
    );
}
