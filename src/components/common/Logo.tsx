import React from 'react';

interface LogoProps {
    className?: string;
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    showText?: boolean;
    height?: number | string;
}

const Logo: React.FC<LogoProps> = ({
    className,
    primaryColor = 'var(--primary)',
    secondaryColor = 'var(--accent)',
    textColor = 'var(--primary)',
    showText = true,
    height = 40
}) => {
    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg
                width={height}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
            >
                {/* Compass Circles */}
                <circle cx="50" cy="50" r="45" stroke={primaryColor} strokeWidth="2" opacity="0.3" />
                <circle cx="50" cy="50" r="38" stroke={primaryColor} strokeWidth="4" />
                <circle cx="50" cy="50" r="32" stroke={secondaryColor} strokeWidth="2" />

                {/* Compass Needles */}
                {/* North */}
                <path d="M50 8L58 35H42L50 8Z" fill={secondaryColor} />
                <path d="M50 8L50 35H42L50 8Z" fill={secondaryColor} opacity="0.7" />

                {/* South */}
                <path d="M50 92L42 65H58L50 92Z" fill={primaryColor} />
                <path d="M50 92L50 65H58L50 92Z" fill={primaryColor} opacity="0.7" />

                {/* West */}
                <path d="M8 50L35 42V58L8 50Z" fill={primaryColor} />

                {/* East */}
                <path d="M92 50L65 58V42L92 50Z" fill={primaryColor} />

                {/* Central 'N' */}
                <rect x="38" y="38" width="24" height="24" rx="2" fill="white" />
                <path
                    d="M44 56V44H47.5L52.5 50.5V44H56V56H52.5L47.5 49.5V56H44Z"
                    fill={primaryColor}
                />
            </svg>
            {showText && (
                <span style={{
                    color: textColor,
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1
                }}>
                    Nordic<span style={{ color: secondaryColor }}>Visa</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
