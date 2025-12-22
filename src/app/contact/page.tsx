import styles from '../page.module.css';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Nordic Visa Consultancy',
    description: 'Get in touch for a free initial assessment or book a consultation.',
};

export default function ContactPage() {
    return (
        <div className={styles.features} style={{ backgroundColor: 'var(--background)' }}>
            <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Ready to start your journey? Fill out the form below or visit our office.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <div>
                        <div className={styles.card} style={{ marginBottom: '2rem' }}>
                            <h3 className={styles.cardTitle}>Get in Touch</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--background-alt)', padding: '0.8rem', borderRadius: '50%' }}>
                                        <Mail color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Us</h4>
                                        <p style={{ fontWeight: 600 }}>nordicvisaconsultancy1@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--background-alt)', padding: '0.8rem', borderRadius: '50%' }}>
                                        <Phone color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Call / WhatsApp</h4>
                                        <p style={{ fontWeight: 600 }}>0330 5060468</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--background-alt)', padding: '0.8rem', borderRadius: '50%' }}>
                                        <MapPin color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Visit Us</h4>
                                        <p style={{ fontWeight: 600 }}>Cheif Engineering Advisors, 6, Atatürk Avenue, G-5/1, Islamabad, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card} style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar /> Book Consultation
                            </h3>
                            <p style={{ color: '#E2E8F0', marginBottom: '1rem' }}>
                                Schedule a 1-on-1 session with our immigration experts.
                            </p>
                            <a
                                href="https://wa.me/923305060468"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    background: 'var(--accent)',
                                    color: 'var(--text-main)',
                                    fontWeight: 700,
                                    padding: '0.8rem',
                                    width: '100%',
                                    borderRadius: 'var(--radius-sm)',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                Book Now on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
