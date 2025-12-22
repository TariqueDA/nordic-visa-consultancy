import styles from '../page.module.css';

export const metadata = {
    title: 'About Us | Nordic Visa Consultancy',
    description: 'Our mission, vision, and values. Transforming visa consultancy in Pakistan starting 2026.',
};

export default function AboutPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>About Nordic Visa Consultancy</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Founded with a vision to bring transparency, data-driven insights, and professional integrity
                        to the immigration industry in Pakistan.
                    </p>
                </div>

                <div className={styles.grid} style={{ marginBottom: '4rem' }}>
                    <div style={{ paddingRight: '2rem' }}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            To empower Pakistani students and professionals by providing accurate, lawful, and comparative information about European opportunities.
                            We aim to eliminate the confusion and fraud often associated with visa consultancy by basing our guidance on official data and factual comparisons.
                        </p>
                    </div>
                    <div>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Why 2026?</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            We are preparing to launch our full-scale operations in 2026 to align with upcoming changes in European immigration policies.
                            Our team is currently building the most comprehensive database of university programs and job market trends.
                        </p>
                    </div>
                </div>

                <div className={styles.statsSection} style={{ borderRadius: 'var(--radius-md)' }}>
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Our Values</h2>
                    <div className={styles.grid}>
                        <div className={styles.statItem}>
                            <h3>Honesty</h3>
                            <p>No false promises. We tell you your real chances.</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>Clarity</h3>
                            <p>A to Z roadmaps with no hidden steps.</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>Excellence</h3>
                            <p>Premium support for premium clients.</p>
                        </div>
                    </div>
                </div>

                {/* Our Journey Timeline Infographic */}
                <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                    <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '3rem', fontSize: '2rem' }}>
                        📍 Our Journey to 2026
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                fontSize: '2rem'
                            }}>🔍</div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>2024-2025</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Research & Data Collection</p>
                        </div>
                        <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                fontSize: '2rem'
                            }}>⚙️</div>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Q1 2026</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Platform Development</p>
                        </div>
                        <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                fontSize: '2rem'
                            }}>🚀</div>
                            <h4 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Mid 2026</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Launch & Operations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
