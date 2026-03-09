const ArrowDown = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9.5 8.5L2.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 3.5V8.5H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowUp = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 3.5L9.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 8.5V3.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const fmtPct = (pct) => {
    if (pct == null) return '0.00';
    return Math.abs(pct).toFixed(2);
};

const ChangeIndicator = ({ value, className = '' }) => {
    if (value == null) return <span className={`text-gray-40 ${className}`}>0.00%</span>;
    const isNeg = value < 0;
    const color = isNeg ? 'text-red-60' : value > 0 ? 'text-green-60' : 'text-gray-60';

    return (
        <span className={`inline-flex items-center gap-0.5 ${color} ${className}`}>
            {isNeg ? <ArrowDown /> : value > 0 ? <ArrowUp /> : null}
            {fmtPct(value)}%
        </span>
    );
};

export default ChangeIndicator;

