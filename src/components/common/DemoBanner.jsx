const DemoBanner = () => (
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
            }}
        >
            <span style={{ color: '#F7931A', fontWeight: 700 }}>Student Project — </span>
            This is an academic demo application built for a Multimedia and Web Design course. It is{' '}
            <strong style={{ color: '#fff' }}>not affiliated with, endorsed by, or associated with Coinbase, Inc.</strong>{' '}
            in any way.
        </p>
    </div>
);

export default DemoBanner;
