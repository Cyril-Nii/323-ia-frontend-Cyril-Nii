import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./pages/Home.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Explore from './pages/Explore';
import MarketStats from './pages/MarketStats.jsx';
import Learn from './pages/Learn.jsx';
import CryptoBasics from './pages/CryptoBasics.jsx';
import Profile from './pages/Profile.jsx';
import Loader from './components/common/Loader.jsx';
import DemoBanner from './components/common/DemoBanner.jsx';
import FooterDisclaimer from './components/common/FooterDisclaimer.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <AuthProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <DemoBanner />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/market-stats" element={<MarketStats />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/learn" element={<Learn />} />
                        <Route path="/learn/crypto-basics" element={<CryptoBasics />} />
                        {/* Protected routes */}
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
                <FooterDisclaimer />
            </div>
        </AuthProvider>
    )
}

export default App;