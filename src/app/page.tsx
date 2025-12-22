import Link from 'next/link';
import styles from './page.module.css';
import { GraduationCap, Briefcase, Stethoscope, Plane, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Your Gateway to a Future in Europe</h1>
          <p className={styles.tagline}>
            Empowering Pakistani students, engineers, and medical professionals with transparent,
            comparative, and data-driven guidance for study, work, and settlement.
            Starting operations in 2026.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Free Initial Assessment
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.features}>
        <div className={styles.sectionTitle}>
          <h2>Why Choose Europe?</h2>
          <p style={{ color: 'var(--text-muted)' }}>Explore our specialized pathways tailored for your career goals.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <GraduationCap size={40} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Study in Europe</h3>
            <p className={styles.cardText}>
              Bachelor's & Master's programs in top universities across Germany, Sweden, Finland, and more.
              Comprehensive admission strategies and scholarship guidance.
            </p>
            <Link href="/study" className={styles.cardLink}>Explore Study Options <ArrowRight size={16} /></Link>
          </div>

          <div className={styles.card}>
            <Briefcase size={40} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Job Seeker Visas</h3>
            <p className={styles.cardText}>
              Dedicated pathways for Engineering & IT professionals to find work in Europe's booming tech hubs.
              Guidance on eligibility and documentation.
            </p>
            <Link href="/job-seeker" className={styles.cardLink}>Find Job Pathways <ArrowRight size={16} /></Link>
          </div>

          <div className={styles.card}>
            <Stethoscope size={40} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Medical Professionals</h3>
            <p className={styles.cardText}>
              Specialized roadmap for Doctors, Nurses, and Biomedical Engineers to license and practice
              in European healthcare systems.
            </p>
            <Link href="/medical" className={styles.cardLink}>Medical Careers <ArrowRight size={16} /></Link>
          </div>

          <div className={styles.card}>
            <Plane size={40} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Visit Visas</h3>
            <p className={styles.cardText}>
              Tourist and family visit visa assistance for popular European destinations.
              Increase your approval chances with proper planning.
            </p>
            <Link href="/visit-visa" className={styles.cardLink}>Plan Your Visit <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className={styles.statsSection}>
        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className={styles.statItem}>
            <h3>10+</h3>
            <p>Countries Covered</p>
          </div>
          <div className={styles.statItem}>
            <h3>A-Z</h3>
            <p>Complete Guidance</p>
          </div>
          <div className={styles.statItem}>
            <h3>2026</h3>
            <p>Starting Operations</p>
          </div>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Transparency</p>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className={styles.features} style={{ backgroundColor: 'var(--background-alt)' }}>
        <div className={styles.sectionTitle}>
          <h2>The Nordic Visa Difference</h2>
          <p style={{ color: 'var(--text-muted)' }}>We don't just fill forms. We build careers.</p>
        </div>
        <div className={styles.grid}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Data-Driven Comparisons</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Unlike others, we provide detailed comparison tables of tuition fees, cost of living,
              and visa probabilities so you can make an informed decision based on facts, not sales pitches.
            </p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>A-Z Roadmap</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              From selecting the right country to your flight and first month accommodation options,
              our consultancy covers every single step of your journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
