import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
// import AccountTypeSelect from './pages/AccountTypeSelect';
// import ForgotPassword from './pages/ForgotPassword';
// import VerifyCode from './pages/VerifyCode';
import Explore from './pages/Explore';
// import MarketStatsPage from './pages/MarketStatsPage';
import Learn from './pages/Learn.jsx';
// import CryptoBasicsPage from './pages/CryptoBasicsPage';
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
            {/*<Route path="/market-stats" element={<MarketStatsPage />} />*/}
            <Route path="/signin" element={<SignIn />} />
            {/*<Route path="/account-type" element={<AccountTypeSelect />} />*/}
            <Route path="/signup" element={<SignUp />} />
            {/*<Route path="/forgot-password" element={<ForgotPassword />} />*/}
            {/*<Route path="/verify" element={<VerifyCode />} />*/}
            <Route path="/learn" element={<Learn />} />
            {/*<Route path="/learn/crypto-basics" element={<CryptoBasicsPage />} />*/}
        </Routes>
    )
}

export default App;