import styles from '../page.module.css';
import ComparisonTable from '@/components/ui/ComparisonTable';
import familyData from '@/data/family-visa.json';
import Link from 'next/link';

export const metadata = {
    title: 'Family Ties Visa | Nordic Visa Consultancy',
    description: 'Expert guidance for Family Reunion and Reunification visas across Nordic and European countries.',
};

const columns = [
    { header: 'Country', accessor: 'country' },
    { header: 'Visa Type', accessor: 'visaType' },
    { header: 'Key Requirements', accessor: 'requirement' },
    { header: 'Timeline', accessor: 'processing' },
    { header: 'Family Benefits', accessor: 'benefits' },
];

export default function FamilyVisaPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#10B981',
                        borderRadius: '2rem',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                        👨‍👩‍👧‍👦 Keeping Families Together
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Family Ties <br /> <span style={{ color: 'var(--accent)' }}>& Reunion Visas</span>
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                        Move to Europe with your loved ones. We specialize in family reunification for doctors,
                        engineers, and students, ensuring your family joins you as quickly as possible.
                    </p>
                </div>

                <ComparisonTable
                    title="Family Reunion Pathways"
                    columns={columns}
                    data={familyData}
                />

                <div className={styles.sectionTitle} style={{ marginTop: '6rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem' }}>Reunification Process</h2>
                    <p style={{ color: 'var(--text-muted)' }}>How we help your family join you in Europe</p>
                </div>

                <div className={styles.grid} style={{ gap: '1.5rem' }}>
                    <div className={styles.card} style={{ borderLeft: '4px solid #10B981' }}>
                        <h3 className={styles.cardTitle}>1. Eligibility Audit</h3>
                        <p className={styles.cardText}>Assessment of main applicant's visa type, income, and housing to ensure they meet the maintenance requirements.</p>
                    </div>
                    <div className={styles.card} style={{ borderLeft: '4px solid #10B981' }}>
                        <h3 className={styles.cardTitle}>2. Document Prep</h3>
                        <p className={styles.cardText}>Legalization of marriage certificates, birth certificates, and family registration certificates (FRC).</p>
                    </div>
                    <div className={styles.card} style={{ borderLeft: '4px solid #10B981' }}>
                        <h3 className={styles.cardTitle}>3. App Submission</h3>
                        <p className={styles.cardText}>Guided submission to the embassy or local immigration office (UDI, Socialstyrelsen, etc.).</p>
                    </div>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    marginTop: '5rem',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Special Note for Medical & Engineering Families</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', opacity: 0.9 }}>
                        Countries like <b>Germany, Ireland, and Sweden</b> often prioritize family reunion for "Highly Skilled Migrants."
                        In many cases, your spouse may be granted full work rights immediately upon arrival.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem' }}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Discuss Family Reunion
                    </Link>
                </div>
            </div>
        </div>
    );
}
