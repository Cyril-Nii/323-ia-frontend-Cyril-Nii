import { useEffect } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import SubscribePopup from '../components/common/SubscribePopup.jsx';
import LearnCard from '../components/cards/LearnCard.jsx';
import { cryptoBasicsArticles } from '../data/cryptoBasicsArticles.js';

export default function CryptoBasicsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex-ff5rfy6 flex-direction-f1ltdvd9">
            <Header />

            <main className="flex-ff5rfy6 flex-direction-f1ltdvd9 width-ws51euf flex-grow-f1kx1jup" style={{ paddingBottom: '96px', '--width': '100%', '--flex-grow': 1 }}>
                <div className="flex-ff5rfy6" style={{ width: '100%', margin: '0px auto', boxSizing: 'border-box', maxWidth: '1440px', padding: '0 24px' }}>

                    <div className="flex-ff5rfy6 flex-direction-f1ltdvd9" style={{ width: '100%' }}>
                        {/* Header Area */}
                        <div className="flex-ff5rfy6 align-items-a1myc2e" style={{ marginTop: '48px', marginBottom: '24px', alignItems: 'center' }}>
                            <h1 className="margin-m1p1g5w text-t1u3h85y" style={{ '--color': 'var(--cds-core-color-display)', '--font-family': 'var(--cds-fontFamily-display)', '--font-size': '2em', '--font-weight': '500', '--line-height': 1.2 }}>
                                Crypto basics
                            </h1>
                        </div>

                        <p className="margin-m1p1g5w text-t1u3h85y" style={{ '--color': 'var(--cds-core-color-foregroundMuted)', '--font-family': 'var(--cds-fontFamily-text)', '--font-size': '1.125em', '--font-weight': '400', '--line-height': 1.4, marginBottom: '48px', maxWidth: '800px' }}>
                            New to crypto? Not for long — start with these guides and explainers
                        </p>

                        {/* Grid Area */}
                        <div className="grid-gsn3qwe" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '24px',
                            width: '100%'
                        }}>
                            {cryptoBasicsArticles.map((article, idx) => (
                                <LearnCard key={idx} {...article} />
                            ))}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
            <SubscribePopup />
        </div>
    );
}
