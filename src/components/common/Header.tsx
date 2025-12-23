'use client';

<Link href="/" className={styles.logoLink}>
    <Logo textColor="white" primaryColor="white" secondaryColor="var(--accent)" height={45} />
</Link>

{/* Desktop Nav */ }
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

{/* Mobile Menu Button */ }
<button
    className={styles.mobileMenuBtn}
    onClick={() => setIsMobileOpen(!isMobileOpen)}
>
    {isMobileOpen ? <X /> : <Menu />}
</button>
            </div >

    {/* Mobile Nav Overlay */ }
{
    isMobileOpen && (
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
    )
}
        </header >
    );
}
