import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AccountTypeSelect from './pages/AccountTypeSelect.jsx';
import Explore from './pages/Explore';
import MarketStats from './pages/MarketStats.jsx';
import Learn from './pages/Learn.jsx';
import CryptoBasics from './pages/CryptoBasics.jsx';
import Loader from './components/common/Loader.jsx';


const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/market-stats" element={<MarketStats />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account-type" element={<AccountTypeSelect />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/crypto-basics" element={<CryptoBasics />} />
        </Routes>
    )
}

export default App;