'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/study', label: 'Study' },
    { href: '/medical', label: 'Medical' },
    { href: '/job-seeker', label: 'Job Seeker' },
    { href: '/family-visa', label: 'Family Visa' },
    { href: '/visit-visa', label: 'Visit Visa' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/about', label: 'About Us' },
];

export default function Header() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    NordicVisa
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.cta}>
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileOpen && (
                <div style={{
                    position: 'absolute',
                    top: '75px',
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to bottom, var(--primary), var(--primary-dark))',
                    padding: '1.5rem',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            style={{
                                padding: '0.875rem',
                                fontWeight: 500,
                                color: pathname === link.href ? 'white' : 'rgba(255, 255, 255, 0.85)',
                                backgroundColor: pathname === link.href ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                borderRadius: 'var(--radius-md)',
                                transition: 'all 0.2s'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileOpen(false)}
                        style={{
                            color: 'white',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                            padding: '0.875rem',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center'
                        }}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </header>
    );
}
