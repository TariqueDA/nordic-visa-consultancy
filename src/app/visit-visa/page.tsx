import styles from '../page.module.css';
import ComparisonTable from '@/components/ui/ComparisonTable';
import visitData from '@/data/visit-countries.json';
import Link from 'next/link';

export const metadata = {
    title: 'Visit Visas | Nordic Visa Consultancy',
    description: 'Tourist and family visit visa assistance for Europe. Check requirements and fees.',
};

const columns = [
    { header: 'Country', accessor: 'country' },
    { header: 'Visa Fee', accessor: 'fee' },
    { header: 'Processing Time', accessor: 'processing' },
    { header: 'Success Ratio', accessor: 'success' },
    { header: 'Key Note', accessor: 'note' },
];

export default function VisitVisaPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(245, 158, 11, 0.1)',
                        color: '#D97706',
                        borderRadius: '2rem',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(245, 158, 11, 0.3)'
                    }}>
                        ⚡ High Success & Fast Processing
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Top 10 European <br /> <span style={{ color: 'var(--accent)' }}>Visit Visa Destinations</span>
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                        Planning your next trip? We've analyzed and ranked the best Schengen countries for Pakistani travelers
                        based on visa approval speed, success ratios, and overall favorite choices.
                    </p>
                </div>

                <ComparisonTable
                    title="Top 10 Fast-Track Visit Visas"
                    columns={columns}
                    data={visitData}
                />

                <div className={styles.sectionTitle} style={{ marginTop: '4rem' }}>
                    <h2>How We Help</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Profile Analysis</h3>
                        <p className={styles.cardText}>Assessment of your travel history, financial stability, and ties to Pakistan to select the best country to apply to.</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Itinerary Planning</h3>
                        <p className={styles.cardText}>Professional travel plans and hotel bookings that make sense to the visa officer.</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Cover Letter</h3>
                        <p className={styles.cardText}>A persuasive cover letter explaining your purpose of visit and intent to return.</p>
                    </div>
                </div>

                {/* Visa Success Tips Infographic */}
                <div style={{
                    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '4rem',
                    border: '2px solid #fbbf24'
                }}>
                    <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '2rem', fontSize: '1.75rem' }}>
                        ✅ Top 5 Tips for Visa Approval
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💰</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Strong Finances</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Show 6 months bank statements</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏠</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Home Ties</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Proof of job/property</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✈️</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Travel History</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Previous visas help</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📋</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Clear Purpose</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Detailed itinerary</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💼</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Travel Insurance</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>€30k coverage required</p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Start Your Application
                    </Link>
                </div>
            </div>
        </div>
    );
}
