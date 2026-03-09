export const FALLBACK_GHS = 16.5;

export const COIN_META = [
    { binance: 'BTCUSDT', name: 'Bitcoin', symbol: 'BTC', supply: 19700000 },
    { binance: 'ETHUSDT', name: 'Ethereum', symbol: 'ETH', supply: 120200000 },
    { binance: 'BNBUSDT', name: 'BNB', symbol: 'BNB', supply: 145900000 },
    { binance: 'SOLUSDT', name: 'Solana', symbol: 'SOL', supply: 441000000 },
    { binance: 'XRPUSDT', name: 'XRP', symbol: 'XRP', supply: 56600000000 },
    { binance: 'ADAUSDT', name: 'Cardano', symbol: 'ADA', supply: 37100000000 },
    { binance: 'DOGEUSDT', name: 'Dogecoin', symbol: 'DOGE', supply: 143600000000 },
    { binance: 'DOTUSDT', name: 'Polkadot', symbol: 'DOT', supply: 1400000000 },
    { binance: 'LTCUSDT', name: 'Litecoin', symbol: 'LTC', supply: 73800000 },
    { binance: 'AVAXUSDT', name: 'Avalanche', symbol: 'AVAX', supply: 403000000 },
    { binance: 'LINKUSDT', name: 'Chainlink', symbol: 'LINK', supply: 608000000 },
    { binance: 'UNIUSDT', name: 'Uniswap', symbol: 'UNI', supply: 600000000 },
    { binance: 'ATOMUSDT', name: 'Cosmos', symbol: 'ATOM', supply: 292000000 },
    { binance: 'XLMUSDT', name: 'Stellar', symbol: 'XLM', supply: 29600000000 },
    { binance: 'ETCUSDT', name: 'Ethereum Classic', symbol: 'ETC', supply: 147000000 },
    { binance: 'AAVEUSDT', name: 'Aave', symbol: 'AAVE', supply: 15100000 },
    { binance: 'ALGOUSDT', name: 'Algorand', symbol: 'ALGO', supply: 8100000000 },
    { binance: 'FILUSDT', name: 'Filecoin', symbol: 'FIL', supply: 530000000 },
    { binance: 'TRXUSDT', name: 'TRON', symbol: 'TRX', supply: 86200000000 },
    { binance: 'XTZUSDT', name: 'Tezos', symbol: 'XTZ', supply: 983000000 },
    { binance: 'MKRUSDT', name: 'Maker', symbol: 'MKR', supply: 900000 },
    { binance: 'COMPUSDT', name: 'Compound', symbol: 'COMP', supply: 8300000 },
    { binance: 'DASHUSDT', name: 'Dash', symbol: 'DASH', supply: 11500000 },
    { binance: 'EOSUSDT', name: 'EOS', symbol: 'EOS', supply: 1100000000 },
    { binance: 'BATUSDT', name: 'Basic Attention', symbol: 'BAT', supply: 1500000000 },
    { binance: 'VETUSDT', name: 'VeChain', symbol: 'VET', supply: 72700000000 },
    { binance: 'NEOUSDT', name: 'NEO', symbol: 'NEO', supply: 70500000 },
    { binance: 'WAVESUSDT', name: 'Waves', symbol: 'WAVES', supply: 100000000 },
    { binance: 'SHIBUSDT', name: 'Shiba Inu', symbol: 'SHIB', supply: 589000000000000 },
    { binance: 'MATICUSDT', name: 'Polygon', symbol: 'MATIC', supply: 9900000000 },
];

export const COIN_META_MAP = Object.fromEntries(COIN_META.map((coin) => [coin.binance, coin]));
export const BINANCE_SYMBOLS = encodeURIComponent(JSON.stringify(COIN_META.map((coin) => coin.binance)));

export const getCoinIcon = (symbol) =>
    `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/${symbol.toLowerCase()}.png`;

export const CURRENCIES = [
    { value: 'usd', label: 'USD', sublabel: 'US Dollar' },
    { value: 'ghs', label: 'GHS', sublabel: 'Ghanaian Cedi' },
    { value: 'eur', label: 'EUR', sublabel: 'Euro' },
    { value: 'gbp', label: 'GBP', sublabel: 'British Pound' },
    { value: 'jpy', label: 'JPY', sublabel: 'Japanese Yen' },
    { value: 'cad', label: 'CAD', sublabel: 'Canadian Dollar' },
    { value: 'aud', label: 'AUD', sublabel: 'Australian Dollar' },
    { value: 'chf', label: 'CHF', sublabel: 'Swiss Franc' },
    { value: 'cny', label: 'CNY', sublabel: 'Chinese Yuan' },
    { value: 'inr', label: 'INR', sublabel: 'Indian Rupee' },
    { value: 'ngn', label: 'NGN', sublabel: 'Nigerian Naira' },
    { value: 'zar', label: 'ZAR', sublabel: 'South African Rand' },
    { value: 'brl', label: 'BRL', sublabel: 'Brazilian Real' },
    { value: 'krw', label: 'KRW', sublabel: 'South Korean Won' },
    { value: 'aed', label: 'AED', sublabel: 'United Arab Emirates Dirham' },
    { value: 'nzd', label: 'NZD', sublabel: 'New Zealand Dollar' },
    { value: 'sgd', label: 'SGD', sublabel: 'Singapore Dollar' },
    { value: 'hkd', label: 'HKD', sublabel: 'Hong Kong Dollar' },
    { value: 'sek', label: 'SEK', sublabel: 'Swedish Krona' },
    { value: 'nok', label: 'NOK', sublabel: 'Norwegian Krone' },
    { value: 'mxn', label: 'MXN', sublabel: 'Mexican Peso' },
    { value: 'try', label: 'TRY', sublabel: 'Turkish Lira' },
    { value: 'rub', label: 'RUB', sublabel: 'Russian Ruble' },
    { value: 'pln', label: 'PLN', sublabel: 'Polish Zloty' },
    { value: 'php', label: 'PHP', sublabel: 'Philippine Peso' },
    { value: 'thb', label: 'THB', sublabel: 'Thai Baht' },
    { value: 'idr', label: 'IDR', sublabel: 'Indonesian Rupiah' },
    { value: 'czk', label: 'CZK', sublabel: 'Czech Koruna' },
    { value: 'ils', label: 'ILS', sublabel: 'Israeli New Shekel' },
    { value: 'clp', label: 'CLP', sublabel: 'Chilean Peso' },
    { value: 'pkr', label: 'PKR', sublabel: 'Pakistani Rupee' },
    { value: 'ars', label: 'ARS', sublabel: 'Argentine Peso' },
    { value: 'cop', label: 'COP', sublabel: 'Colombian Peso' },
    { value: 'sar', label: 'SAR', sublabel: 'Saudi Riyal' },
    { value: 'myr', label: 'MYR', sublabel: 'Malaysian Ringgit' },
    { value: 'twd', label: 'TWD', sublabel: 'New Taiwan Dollar' },
    { value: 'kes', label: 'KES', sublabel: 'Kenyan Shilling' },
    { value: 'egp', label: 'EGP', sublabel: 'Egyptian Pound' },
    { value: 'btc', label: 'BTC', sublabel: 'Bitcoin' },
    { value: 'eth', label: 'ETH', sublabel: 'Ethereum' },
];

export const ASSET_FILTER_OPTIONS = [
    { value: 'all', label: 'All assets', iconKey: 'all' },
    { value: 'tradeable', label: 'Tradeable', iconKey: 'tradeable' },
    { value: 'new', label: 'New', iconKey: 'new' },
    { value: 'gainers', label: 'Gainers', iconKey: 'gainers' },
    { value: 'losers', label: 'Losers', iconKey: 'losers' },
];

export const TIME_PERIODS = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '1D' },
    { value: '7d', label: '1W' },
    { value: '30d', label: '1M' },
    { value: '1y', label: '1Y' },
];

export const ROWS_OPTIONS = [
    { value: 10, label: '10 rows' },
    { value: 30, label: '30 rows' },
    { value: 50, label: '50 rows' },
];

export const EXPLORE_MARKET_COPY = {
    indexSubtitle: 'Coinbase 50 Index is down',
    indexChange: '1.23%',
    marketSummaryStart: 'The overall crypto market is',
    marketSummaryEnd: 'this week. As of today, the total crypto market capitalization is',
    marketSummaryTail: 'representing a 0.38% increase from last week.',
    marketDetails:
        'The 24-hour crypto market trading volume has also seen a 1.31% decrease over the past day. The top performing cryptocurrencies by price are Plume, Assemble AI and Parcl. Bitcoin remains the largest cryptocurrency by market capitalization of GHS 14,406,950,473,319.81. Its 24-hour trading volume has seen a 12.92% increase over the past day. Ethereum, the second largest cryptocurrency by market cap of GHS 2,519,780,153,459.30, has seen its 24-hour trading volume increase 19.11% in the last day.',
};

export const COIN_BRAND_COLORS = {
    BTC: '#F7931A', ETH: '#627EEA', BNB: '#F3BA2F', SOL: '#14F195',
    XRP: '#23292F', ADA: '#0033AD', DOGE: '#C2A633', DOT: '#E6007A',
    LTC: '#BFBBBB', AVAX: '#E84142', LINK: '#2A5ADA', UNI: '#FF007A',
    ATOM: '#2E3148', XLM: '#14B6E7', ETC: '#328332', AAVE: '#2EBAC6',
    ALGO: '#000000', FIL: '#0090FF', TRX: '#FF0013', XTZ: '#2C7DF7',
    MKR: '#1AAB9B', COMP: '#00D395', DASH: '#008CE7', EOS: '#000000',
    BAT: '#FF5000', VET: '#15BDFF', NEO: '#00E599', WAVES: '#0155FF',
    SHIB: '#FFA409', MATIC: '#8247E5',
};

export const FALLBACK_BRAND_COLORS = ['#0052FF', '#CF202F', '#098551', '#F7931A'];

export const getCoinBrandColor = (symbol) => {
    if (COIN_BRAND_COLORS[symbol]) return COIN_BRAND_COLORS[symbol];
    const hash = symbol.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    return FALLBACK_BRAND_COLORS[hash % FALLBACK_BRAND_COLORS.length];
};

export const FALLBACK_PRICE_SEED = [67200, 3500, 590, 145, 0.5, 0.45, 0.16];

