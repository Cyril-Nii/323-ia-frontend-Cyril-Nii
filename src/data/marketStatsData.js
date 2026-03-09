export const MARKET_STATS_ASSET_LISTS = {
    topAssets: [
        { name: 'Bitcoin', symbol: 'BTC', price: 720734.65, change: -0.99, iconColor: 'bg-[#F7931A]' },
        { name: 'Ethereum', symbol: 'ETH', price: 20861.2, change: -1.7, iconColor: 'bg-[#627EEA]' },
        { name: 'Tether', symbol: 'USDT', price: 10.77, change: 0.01, iconColor: 'bg-[#26A17B]' },
    ],
    mostVolume: [
        { name: 'Solana', symbol: 'SOL', price: 975.64, change: 3.21, iconColor: 'bg-[#14F195]' },
        { name: 'XRP', symbol: 'XRP', price: 6.12, change: -0.35, iconColor: 'bg-[#23262B]' },
        { name: 'Cardano', symbol: 'ADA', price: 3.52, change: 1.42, iconColor: 'bg-[#0033AD]' },
    ],
};

export const MARKET_STATS_METRICS = [
    {
        id: 'market-cap',
        title: 'Market cap',
        description:
            "The total value of all cryptocurrencies combined, giving a snapshot of the entire crypto market's size and health. When the market cap is growing, it usually means more people are investing, and the market is doing well. If it's shrinking, it could mean people are selling off their assets, and the market might be facing a downturn.",
        value: 'GHS 24.06T',
        change: -1.09,
        isPositive: false,
        listTitle: 'Top Assets',
        assetList: 'topAssets',
    },
    {
        id: 'trade-volume',
        title: 'Trade volume',
        description:
            'The total amount of cryptocurrency traded within a specific period, reflecting market activity and liquidity. Monitoring trade volume helps you gauge market strength and liquidity. High volume often supports price trends, suggesting strong market interest, while low volume may signal weaker trends and potential uncertainty.',
        value: 'GHS 1.26T',
        change: 4.38,
        isPositive: true,
        listTitle: 'Most volume',
        assetList: 'mostVolume',
    },
    {
        id: 'btc-dominance',
        title: 'BTC dominance',
        description:
            "Bitcoin's percentage of the total market cap, indicating its relative strength compared to other cryptocurrencies. Monitoring BTC dominance helps you gauge Bitcoin's market strength. High dominance indicates Bitcoin's strong position relative to altcoins, while low dominance suggests increasing interest in other cryptocurrencies.",
        value: '60.13%',
        change: -0.12,
        isPositive: false,
        listTitle: 'Top Assets',
        assetList: 'topAssets',
    },
    {
        id: 'buy-sell',
        title: 'Buy-sell ratio',
        description:
            'A key metric that measures the proportion of buy orders to sell orders in the market. When the buy sell ratio is high, it means more people are buying than selling, which could signal growing interest in acquiring assets. When it\'s low, it indicates more people are selling than buying, which could signal the opposite.',
        value: 'GHS 0.76',
        change: -2.57,
        isPositive: false,
        listTitle: 'Top Assets',
        assetList: 'topAssets',
    },
];

