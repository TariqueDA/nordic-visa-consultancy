import styles from '../page.module.css';
import ComparisonTable from '@/components/ui/ComparisonTable';
import medicalData from '@/data/medical-countries.json';
import Link from 'next/link';

export const metadata = {
    title: 'Medical Professionals Pathways | Nordic Visa Consultancy',
    description: 'Licensing and career pathways for Doctors and Nurses in Germany, Sweden, and Norway.',
};

const columns = [
    { header: 'Country', accessor: 'country' },
    { header: 'Role Title', accessor: 'role' },
    { header: 'Language Req', accessor: 'language' },
    { header: 'Demand', accessor: 'demand' },
    { header: 'Licensing Exam', accessor: 'exam' },
    { header: 'Approx. Timeline', accessor: 'timeline' },
    { header: 'Starting Application Salary', accessor: 'salary' },
];

export default function MedicalPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '2rem',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                        border: '1px solid var(--primary-light)'
                    }}>
                        🌍 Specialized European Medical Licensing
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Top 10 Medical Pathways <br /> <span style={{ color: 'var(--accent)' }}>for Pakistani Doctors</span>
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                        A precision-mapped roadmap for MBBS Graduates, Specialists, and Nurses.
                        We handle the complexity of recognition, exams, and licensing so you can focus on your career.
                    </p>
                </div>

                <ComparisonTable
                    title="Pathways Comparison (Doctors)"
                    columns={columns}
                    data={medicalData}
                />

                <div className={styles.sectionTitle} style={{ marginTop: '6rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem' }}>The Licensing Masterplan (Step-by-Step)</h2>
                    <p style={{ color: 'var(--text-muted)' }}>A typical path to full registration (Approbation) in Europe</p>
                </div>

                <div className={styles.grid} style={{ gap: '1.5rem' }}>
                    <div className={styles.card} style={{ borderBottom: '4px solid var(--primary-light)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)' }}>01</span>
                            <span style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>Phase 1</span>
                        </div>
                        <h3 className={styles.cardTitle}>Document Assessment</h3>
                        <p className={styles.cardText}>Translation, verification (DataFlow), and attestation of MBBS degrees and PMDC/PMC certificates for European standards.</p>
                    </div>
                    <div className={styles.card} style={{ borderBottom: '4px solid var(--primary-light)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)' }}>02</span>
                            <span style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>Phase 2</span>
                        </div>
                        <h3 className={styles.cardTitle}>Language Mastery</h3>
                        <p className={styles.cardText}>Intensive B2 language training. For Germany/Sweden/Norway, we provide local and international tutor access.</p>
                    </div>
                    <div className={styles.card} style={{ borderBottom: '4px solid var(--primary-light)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)' }}>03</span>
                            <span style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>Phase 3</span>
                        </div>
                        <h3 className={styles.cardTitle}>Medical Terminology</h3>
                        <p className={styles.cardText}>Specialized C1 Medical exam preparation focusing on doctor-patient communication and hospital documentation.</p>
                    </div>
                    <div className={styles.card} style={{ borderBottom: '4px solid var(--primary-light)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)' }}>04</span>
                            <span style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>Phase 4</span>
                        </div>
                        <h3 className={styles.cardTitle}>Final Licensing</h3>
                        <p className={styles.cardText}>Taking the clinical knowledge test (Kenntnisprüfung/Kunskapsprov) to unlock full permanent registration and residency/specialization.</p>
                    </div>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    marginTop: '4rem'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Language Learning Assistance</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                        <strong>Nordic Visa Consultancy</strong> provides comprehensive language learning support to help you pass
                        <strong> German (B2/C1)</strong> and <strong>Swedish (C1)</strong> language exams. We connect you with
                        certified instructors, provide study materials, and offer exam preparation guidance to ensure you meet
                        the language requirements for medical licensing in Europe.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>German Language</h3>
                            <p>B2 to C1 Medical German</p>
                            <p>Fachsprachprüfung Prep</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>Swedish Language</h3>
                            <p>C1 Medical Swedish</p>
                            <p>Kunskapsprov Preparation</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '5rem' }}>
                    <h2 style={{ textAlign: 'center', color: 'var(--primary)', fontSize: '2.25rem', marginBottom: '1rem' }}>
                        🗣️ Language Proficiency Exams
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1rem' }}>
                        General language proficiency required BEFORE medical licensing exams
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
                        {/* German Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇩🇪 German (B2/C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Goethe-Zertifikat / TestDaF</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations in Pakistan:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ Karachi (Goethe-Institut)</li>
                                <li>✅ Lahore (Goethe-Zentrum)</li>
                                <li>✅ Islamabad (NUML)</li>
                                <li>🇦🇪 UAE: Dubai / Abu Dhabi</li>
                            </ul>
                        </div>

                        {/* Ireland Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇮🇪 Ireland (English)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>IELTS Academic / OET</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations in Pakistan:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ British Council (Major Cities)</li>
                                <li>✅ IDP Pakistan</li>
                                <li>📊 Min Req: IELTS 7.0 / OET Grade B</li>
                            </ul>
                        </div>

                        {/* Swedish Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇸🇪 Swedish (C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>TISUS / Swedex</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>🇸🇪 Sweden (Main Centers)</li>
                                <li>🏛️ Embassy-arranged (Global)</li>
                                <li>🇦🇪 UAE: Embassy in Abu Dhabi</li>
                            </ul>
                        </div>

                        {/* Danish Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇩🇰 Danish (C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Prøve i dansk 3</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>🇩🇰 Denmark ONLY</li>
                                <li>📚 Online prep available from Pakistan</li>
                                <li>⚠️ Intensive 9-12 month focus</li>
                            </ul>
                        </div>

                        {/* Dutch Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇳🇱 Dutch (C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>AKV Test / Staatsexamen NT2</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>🇳🇱 Netherlands (Various)</li>
                                <li>🎓 University tests</li>
                                <li>💡 B1/B2 prep in Pakistan online</li>
                            </ul>
                        </div>

                        {/* Swiss Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇨🇭 Switzerland (B2/C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>German (Goethe) / French (DELF)</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations in Pakistan:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ Goethe Karachi/Lahore</li>
                                <li>✅ Alliance Française (French)</li>
                                <li>⚖️ B2 cert needed for recognition</li>
                            </ul>
                        </div>

                        {/* Norwegian Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇳🇴 Norwegian (B2)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Norskprøven</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>🇳🇴 Norway ONLY (HK-dir)</li>
                                <li>Offered 4 times yearly</li>
                                <li>📑 Register through local municipality</li>
                            </ul>
                        </div>

                        {/* Malta Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇲🇹 Malta (English)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>IELTS Academic / OET</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations in Pakistan:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ British Council</li>
                                <li>✅ IDP Pakistan</li>
                                <li>🏥 OET preferred by Maltese Council</li>
                            </ul>
                        </div>

                        {/* Polish Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇵🇱 Polish (B2/C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>NIL / State Certificate</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ Warsaw (NIL Office)</li>
                                <li>🇵🇱 Major Polish Medical Chambers</li>
                                <li>🔬 Intensive Medical Polish required</li>
                            </ul>
                        </div>

                        {/* Austria Language */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🇦🇹 Austria (C1)</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>ÖSD / Goethe Medical</p>
                            <h4 style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>📍 Locations in Pakistan:</h4>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li>✅ Goethe Karachi/Lahore</li>
                                <li>🇦🇹 ÖSD partners available</li>
                                <li>📢 Must pass "Fachsprachenprüfung"</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '5rem' }}>
                    <h2 style={{ textAlign: 'center', color: 'var(--primary)', fontSize: '2.25rem', marginBottom: '1rem' }}>
                        🏥 Medical Knowledge & Licensing Exams
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1rem' }}>
                        Medical-specific exams required for doctor licensing (AFTER language proficiency)
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
                        {/* German Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇩🇪 Germany (Approbaton)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Step 1:</strong> Fachsprachprüfung (Medical German)</li>
                                <li><strong>Step 2:</strong> Kenntnisprüfung (Medical Knowledge)</li>
                                <li>📍 Location: Germany ONLY (Medical Chambers)</li>
                                <li>⚠️ Need Berufserlaubnis (Temp permit) first</li>
                            </ul>
                        </div>

                        {/* Ireland Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇮🇪 Ireland (IMC Registr.)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> PRES Level 2 & 3</li>
                                <li>📍 Location: Dublin, Ireland</li>
                                <li>🛠️ Specialists may be exempt from PRES</li>
                                <li>✅ Pre-requisite: IELTS/OET + DataFlow</li>
                            </ul>
                        </div>

                        {/* Swedish Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇸🇪 Sweden (Licensing)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> Kunskapsprov (Theoretical & Practical)</li>
                                <li>📍 Location: Sweden ONLY</li>
                                <li>📆 Frequency: 2-3 times per year</li>
                                <li>💉 Includes clinical skills assessment</li>
                            </ul>
                        </div>

                        {/* Denmark Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇩🇰 Denmark (Authorization)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> Medical Knowledge Tests</li>
                                <li>📍 Location: Denmark (Aarhus/Copenhagen)</li>
                                <li>📜 Course on Danish Health Legislation</li>
                                <li>⏱️ 6-month evaluation employment</li>
                            </ul>
                        </div>

                        {/* Swiss Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇨🇭 Switzerland (Recognition)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Path:</strong> MEBEKO Direct / Fed. Exam</li>
                                <li>📍 Location: Bern / Zurich</li>
                                <li>💼 3 years work exp under supervision</li>
                                <li>🌟 Swiss Federal Exam (for non-EU grads)</li>
                            </ul>
                        </div>

                        {/* Austria Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇦🇹 Austria (Nostrifikation)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> Nostrifikationsprüfung</li>
                                <li>📍 Location: Vienna / Graz</li>
                                <li>🩺 Clinical practical skills</li>
                                <li>🇦🇹 ÖÄK Registration required</li>
                            </ul>
                        </div>

                        {/* Norway Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇳🇴 Norway (Equivalence)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> Proficiency Test (University of Oslo)</li>
                                <li>📍 Location: Oslo, Norway</li>
                                <li>📗 Kurs i nasjonale fag (National Subjects)</li>
                                <li>✅ Clinical Internship (Turnustjeneste)</li>
                            </ul>
                        </div>

                        {/* Netherlands Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇳🇱 Netherlands (BIG Reg)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> BI-toets (Professional Knowledge)</li>
                                <li>📍 Location: Utrecht / Amsterdam</li>
                                <li>🔬 Assessment of clinical skills</li>
                                <li>📄 Certificates: Certificates of Good Standing</li>
                            </ul>
                        </div>

                        {/* Malta Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇲🇹 Malta (Council Reg)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Process:</strong> Interview / Clinical Interview</li>
                                <li>📍 Location: Malta (Gwardamanġa)</li>
                                <li>🏝️ Direct entry for some UK grads</li>
                                <li>✅ Must prove OET/IELTS before interview</li>
                            </ul>
                        </div>

                        {/* Poland Medical */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #dc2626', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.25rem' }}>🇵🇱 Poland (PWZ / LEK)</h3>
                            <ul style={{ fontSize: '0.875rem', color: 'var(--text-muted)', listStyle: 'none', padding: 0 }}>
                                <li><strong>Exam:</strong> LEK (Final Medical Exam)</li>
                                <li>📍 Location: Warsaw (CEM)</li>
                                <li>🇵🇱 Can be taken in English (limited options)</li>
                                <li>⏳ 13-month internship (Staż)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Consult a Medical Expert
                    </Link>
                </div>
            </div >
        </div >
    );
}
