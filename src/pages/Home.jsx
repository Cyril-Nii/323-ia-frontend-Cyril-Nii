import useDocumentTitle from "../hooks/useDocumentTitle.js";
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ExploreCryptoSection from '../components/sections/ExploreCryptoSection.jsx';
import AdvancedTraderSection from '../components/sections/AdvancedTraderSection.jsx';
import BaseAppSection from '../components/sections/BaseAppSection.jsx';
import LearnSection from '../components/sections/LearnSection.jsx';
import TakeControlSection from '../components/sections/TakeControlSection.jsx';

const Home = () => {

    useDocumentTitle('Coinbase - Buy and Sell Bitcoin, Ethereum, and more with trust');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <ExploreCryptoSection />
                <AdvancedTraderSection />
                <BaseAppSection />
                <LearnSection />
                <TakeControlSection />
            </main>
            <Footer />
        </div>


    )
}

export default Home;