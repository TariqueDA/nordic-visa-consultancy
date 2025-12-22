import styles from '../page.module.css';
import ComparisonTable from '@/components/ui/ComparisonTable';
import studyData from '@/data/study-countries.json';
import Link from 'next/link';

export const metadata = {
    title: 'Study in Europe | Nordic Visa Consultancy',
    description: 'Compare tuition, living costs, and post-study work visas for Germany, Sweden, Finland, and more.',
};

const columns = [
    { header: 'Country', accessor: 'country' },
    { header: 'Tuition Range', accessor: 'tuition' },
    { header: 'Living Cost', accessor: 'livingCost' },
    { header: 'Language', accessor: 'language' },
    { header: 'Post-Study Visa', accessor: 'postStudyVisa' },
    { header: 'Visa Success', accessor: 'visaProbability' },
];

export default function StudyPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Study in Europe</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Discover top-ranked universities, scholarship opportunities, and career-launching academic programs
                        across the European continent. We guide you from admission to visa.
                    </p>
                </div>

                <ComparisonTable
                    title="Quick Comparison: Top Destinations"
                    columns={columns}
                    data={studyData}
                />

                {/* Job Search Visa Info */}
                <div style={{
                    background: 'var(--background-alt)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '3rem',
                    border: '2px solid var(--primary-light)'
                }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>
                        Countries Offering Job Search Visa After Studies
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
                            <h4 style={{ color: 'var(--primary)', fontWeight: 700 }}>Germany 🇩🇪</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>18 Months Job Search</p>
                        </div>
                        <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
                            <h4 style={{ color: 'var(--primary)', fontWeight: 700 }}>Finland 🇫🇮</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2 Years Job Search</p>
                        </div>
                        <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
                            <h4 style={{ color: 'var(--primary)', fontWeight: 700 }}>Sweden 🇸🇪</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>12 Months Job Search</p>
                        </div>
                        <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
                            <h4 style={{ color: 'var(--primary)', fontWeight: 700 }}>Netherlands 🇳🇱</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>1 Year Orientation</p>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        All countries listed above allow international graduates to search for jobs after completing their degree, giving you time to secure employment and transition to a work visa.
                    </p>
                </div>

                <div className={styles.sectionTitle} style={{ marginTop: '4rem' }}>
                    <h2>Your Journey: A to Z</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Follow our proven step-by-step process to successfully study in Europe
                    </p>
                </div>

                {/* Interactive Timeline */}
                <div style={{ maxWidth: '900px', margin: '3rem auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '30px',
                        top: '20px',
                        bottom: '20px',
                        width: '4px',
                        background: 'linear-gradient(to bottom, var(--primary), var(--accent))',
                        borderRadius: '2px'
                    }}></div>

                    {/* Step 1 */}
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            flexShrink: 0,
                            zIndex: 1,
                            boxShadow: '0 4px 6px rgba(30, 58, 138, 0.3)'
                        }}>01</div>
                        <div style={{ flex: 1, background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Profile Assessment</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                We evaluate your academic background, test scores, financial capacity, and career goals to recommend the best-fit countries and universities for your profile.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            flexShrink: 0,
                            zIndex: 1,
                            boxShadow: '0 4px 6px rgba(30, 58, 138, 0.3)'
                        }}>02</div>
                        <div style={{ flex: 1, background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Applications & Admissions</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                Our team crafts compelling SOPs, polishes your CV, and manages all university applications to maximize your acceptance chances across multiple institutions.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            flexShrink: 0,
                            zIndex: 1,
                            boxShadow: '0 4px 6px rgba(30, 58, 138, 0.3)'
                        }}>03</div>
                        <div style={{ flex: 1, background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Visa & Financials</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                Complete guidance on blocked accounts, sponsorship proofs, scholarship documentation, and visa interview preparation to ensure smooth approval.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--accent), var(--primary-light))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            flexShrink: 0,
                            zIndex: 1,
                            boxShadow: '0 4px 6px rgba(14, 165, 233, 0.3)'
                        }}>04</div>
                        <div style={{ flex: 1, background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Pre-Departure & Beyond</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                Support with student housing, flight bookings, orientation sessions, and connecting you with local student communities to ensure a smooth landing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Expanded Language Learning Assistance Section */}
                <div style={{
                    background: 'var(--background-alt)',
                    padding: '4rem var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '5rem',
                    border: '1px solid var(--primary-light)',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.4rem 1rem',
                                background: 'var(--primary)',
                                color: 'white',
                                borderRadius: '2rem',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '1rem'
                            }}>
                                Your Gateway to Europe
                            </div>
                            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                                Language Learning Assistance
                            </h2>
                            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                                Success in European universities often depends on your language proficiency.
                                <strong> Nordic Visa Consultancy</strong> provides expert guidance and connects you with certified tutors
                                for English and European languages.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {/* English */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', borderTop: '4px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🇬🇧</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)' }}>English Mastery</h3>
                                </div>
                                <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
                                    <li><strong>IELTS Academic</strong> intensive prep</li>
                                    <li>PTE Academic & TOEFL support</li>
                                    <li>Academic writing workshops for SOPs</li>
                                </ul>
                            </div>

                            {/* German */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', borderTop: '4px solid #DE2728', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🇩🇪 🇦🇹</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)' }}>German Pathways</h3>
                                </div>
                                <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
                                    <li>A1 to B2 General German courses</li>
                                    <li>TestDaF & Goethe-Zertifikat prep</li>
                                    <li>Focus on <strong>Germany & Austria</strong></li>
                                </ul>
                            </div>

                            {/* Nordic */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', borderTop: '4px solid #005293', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🇸🇪 🇳🇴 🇫🇮</span>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)' }}>Nordic Languages</h3>
                                </div>
                                <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
                                    <li>Swedish, Norwegian & Finnish basics</li>
                                    <li>Integration language courses</li>
                                    <li><strong>High success</strong> for Nordic applicants</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            marginTop: '3rem',
                            textAlign: 'center',
                            padding: '1.5rem',
                            background: 'rgba(59, 130, 246, 0.05)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px dashed var(--primary-light)'
                        }}>
                            <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 600 }}>
                                🌍 We offer both online and physical class options through our specialized partners in Pakistan.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Book a Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
}
