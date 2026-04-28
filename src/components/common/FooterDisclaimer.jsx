const FooterDisclaimer = () => (
    <div
        style={{
            background: '#0d1117',
            borderTop: '1px solid #1f2937',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
        }}
    >
        {/* Shield icon */}
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5B616E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
            aria-hidden="true"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>

        <p
            style={{
                margin: 0,
                fontSize: '0.75rem',
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.6,
            }}
        >
            <strong style={{ color: '#8A919E' }}>Demo Project — </strong>
            This application is for academic purposes only. Do{' '}
            <strong style={{ color: '#EF4444' }}>not</strong> enter real personal information,
            financial data, or passwords. No data is stored or processed securely.
        </p>
    </div>
);

export default FooterDisclaimer;
