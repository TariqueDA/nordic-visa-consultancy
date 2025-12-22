import styles from '../page.module.css';
import ComparisonTable from '@/components/ui/ComparisonTable';
import jobData from '@/data/job-countries.json';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'Job Seeker Visas | Nordic Visa Consultancy',
    description: 'Pathways for Engineers and IT professionals to find work in Europe. Germany, Sweden, and more.',
};

const columns = [
    { header: 'Country', accessor: 'country' },
    { header: 'Visa Type', accessor: 'visaName' },
    { header: 'Key Requirements', accessor: 'requirement' },
    { header: 'Duration', accessor: 'duration' },
    { header: 'Job Market', accessor: 'market' },
    { header: 'Settlement', accessor: 'settlement' },
];

export default function JobSeekerPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Job Seeker Visas</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Expert guidance for Engineers and IT Professionals.
                        Move to Europe on a job search visa and secure your future in leading tech markets.
                    </p>
                </div>

                <ComparisonTable
                    title="Compare Job Seeker Pathways"
                    columns={columns}
                    data={jobData}
                />

                <div className={styles.sectionTitle} style={{ marginTop: '3rem' }}>
                    <h2>Who is this for?</h2>
                </div>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className={styles.card} style={{ maxWidth: '400px' }}>
                        <h3 className={styles.cardTitle}>Engineers</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Mechanical & Industrial</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Electrical & Electronics</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Civil & Construction</li>
                        </ul>
                    </div>
                    <div className={styles.card} style={{ maxWidth: '400px' }}>
                        <h3 className={styles.cardTitle}>IT Professionals</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Software Developers</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Data Scientists</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success)" /> Cyber Security Experts</li>
                        </ul>
                    </div>
                </div>

                {/* Salary & Success Statistics Infographic */}
                <div style={{
                    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '4rem',
                    border: '2px solid var(--primary-light)'
                }}>
                    <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '2rem', fontSize: '1.75rem' }}>
                        💼 Average Salaries in Europe
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center', background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💻</div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Software Engineer</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>€45k-€75k</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Per Year</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚙️</div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Mechanical Engineer</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>€40k-€65k</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Per Year</p>
                        </div>
                        <div style={{ textAlign: 'center', background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📊</div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Data Scientist</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>€50k-€80k</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Per Year</p>
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
