import { useState } from 'react';

const DemoBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            role="alert"
            style={{
                background: 'linear-gradient(90deg, #1a2a4a 0%, #0d1b35 100%)',
                borderBottom: '1px solid #2C4A7C',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                zIndex: 9999,
                position: 'relative',
            }}
        >
            {/* Warning icon */}
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F7931A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
                aria-hidden="true"
            >
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>

            <p
                style={{
                    margin: 0,
                    fontSize: '0.8125rem',
                    color: '#C7D1E0',
                    textAlign: 'center',
                    lineHeight: 1.5,
                    flex: 1,
                }}
            >
                <span style={{ color: '#F7931A', fontWeight: 700 }}>Student Project - </span>
                This is an academic application built for a Web Design course. It is{' '}
                <strong style={{ color: '#fff' }}>not affiliated with, endorsed by, or associated with Coinbase, Inc.</strong>{' '}
                in any way.
            </p>

            <button
                onClick={() => setIsVisible(false)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#C7D1E0',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                aria-label="Dismiss banner"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
};

export default DemoBanner;
