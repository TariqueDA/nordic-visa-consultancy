import Link from 'next/link';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Nordic Visa Consultancy</h3>
                    <p style={{ color: '#CBD5E0', lineHeight: 1.6 }}>
                        Empowering Pakistani students and professionals to build their future in Europe.
                        Transparent, data-driven, and client-centric guidance starting 2026.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/study" className={styles.link}>Study in Europe</Link></li>
                        <li><Link href="/medical" className={styles.link}>Medical Pathways</Link></li>
                        <li><Link href="/job-seeker" className={styles.link}>Job Seeker Visas</Link></li>
                        <li><Link href="/family-visa" className={styles.link}>Family Visas</Link></li>
                        <li><Link href="/visit-visa" className={styles.link}>Visit Visas</Link></li>
                        <li><Link href="/about" className={styles.link}>About Us</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={16} />
                            <span>nordicvisaconsultancy1@gmail.com</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={16} />
                            <span>0330 5060468</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <MapPin size={16} style={{ marginTop: '4px' }} />
                            <span>Cheif Engineering Advisors, 6, Atatürk Avenue, G-5/1, Islamabad, Pakistan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Nordic Visa Consultancy. All rights reserved.</p>
            </div>
        </footer>
    );
}
