import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import SubscribePopup from '../components/common/SubscribePopup.jsx';
import LearnCard from '../components/cards/LearnCard.jsx';
import {
    popularArticles,
    cryptoBasics,
    whatIs,
    tipsAndTutorials,
    advancedTrading,
    futures,
    allThingsWallet
} from '../data/learnData.js';
import useDocumentTitle from "../hooks/useDocumentTitle.js";

const Learn = () => {

    useDocumentTitle('Learn');

    const [showPopup, setShowPopup] = useState(true);

    // Lock scroll when popup is open
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showPopup]);

    // Scroll to Top on Mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {showPopup && <SubscribePopup onClose={() => setShowPopup(false)} />}

            <main className="flex-1 mt-18">
                {/* Hero Section */}
                <section className="py-16 md:py-24 px-6 w-full max-w-300 mx-auto">
                    <h1 className="text-4xl md:text-[56px] leading-[1.1] font-display font-medium text-black mb-6">
                        Crypto questions, answered
                    </h1>
                    <p className="text-gray-60 text-xl font-body max-w-2xl">
                        Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                    </p>
                </section>

                {/* Featured Section */}
                <section className="py-12 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-display font-medium mb-8 text-black">Featured</h2>

                            <a href="#" className="group block relative rounded-2xl overflow-hidden bg-gray-5 border border-transparent hover:border-gray-20 transition-all shadow-sm hover:shadow-md">
                                <div className="aspect-video w-full relative overflow-hidden">
                                    <img
                                        src="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png"
                                        alt="Dollar cost averaging"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-blue-60 shadow-[0_0_30px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform">
                                            <PlayCircle size={32} fill="currentColor" className="text-blue-60" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 bg-white transition-colors">
									<span className="text-sm font-semibold text-gray-60 tracking-wider uppercase mb-3 block">
										Video Tutorial
									</span>
                                    <h3 className="text-3xl font-display font-medium text-black mb-4 group-hover:text-blue-60 transition-colors">
                                        When is the best time to invest in crypto?
                                    </h3>
                                    <p className="text-lg text-gray-60">
                                        When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-medium mb-8 text-black">Popular</h2>
                            <div className="flex flex-col">
                                {popularArticles.map((article, i) => (
                                    <div key={i} className="flex flex-col">
                                        <a href="#" className="group py-4">
                                            <span className="text-xs font-semibold text-gray-50 tracking-wider uppercase mb-1 block">{article.label}</span>
                                            <h4 className="text-lg font-medium text-black group-hover:text-blue-60 transition-colors">{article.title}</h4>
                                        </a>
                                        {i < popularArticles.length - 1 && <div className="h-px bg-gray-15 w-full"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Crypto Basics */}
                <section className="py-16 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-3 text-black">Crypto basics</h2>
                            <p className="text-gray-60 text-lg">New to crypto? Not for long — start with these guides and explainers</p>
                        </div>
                        <Link to="/learn/crypto-basics" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cryptoBasics.map((item, i) => (
                            <div key={i} className="flex h-full">
                                <LearnCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* What is... */}
                <section className="py-24 px-6 w-full mx-auto bg-gray-5 border-t border-gray-15">
                    <div className="max-w-200 mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-[40px] font-display font-medium text-black">What is...</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {whatIs.map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`px-5 py-3 bg-white rounded-lg shadow-sm border border-transparent hover:border-gray-20 transition-all text-[15px] font-medium ${item.label === 'Crypto wallet' ? 'text-blue-60' : 'text-black hover:text-blue-60'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <a href="#" className="px-6 py-3 bg-blue-60 text-white font-medium rounded-lg hover:bg-blue-70 transition-colors">
                                See more
                            </a>
                        </div>
                    </div>
                </section>

                {/* Tips and Tutorials */}
                <section className="py-16 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-3 text-black">Tips and tutorials</h2>
                            <p className="text-gray-60 text-lg">Get practical, step-by-step answers to all things crypto</p>
                        </div>
                        <a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tipsAndTutorials.map((item, i) => (
                            <div key={i} className="flex h-full">
                                <LearnCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Trading */}
                <section className="py-16 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-3 text-black">Advanced trading</h2>
                            <p className="text-gray-60 text-lg">Ready to advance? Learn the tools and terminology you need to take control of your trades.</p>
                        </div>
                        <a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advancedTrading.map((item, i) => (
                            <div key={i} className="flex h-full">
                                <LearnCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Futures */}
                <section className="py-16 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-3 text-black">Futures</h2>
                            <p className="text-gray-60 text-lg">New to futures trading? Get up to speed on the basics.</p>
                        </div>
                        <a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {futures.map((item, i) => (
                            <div key={i} className="flex h-full">
                                <LearnCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* All Things Wallet */}
                <section className="py-16 px-6 w-full max-w-300 mx-auto border-t border-gray-15">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-3 text-black">All Things Wallet</h2>
                            <p className="text-gray-60 text-lg">Earn yield, dive into crypto apps, control your holdings, and much more</p>
                        </div>
                        <a href="#" className="font-semibold text-blue-60 hover:underline shrink-0">See more ›</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allThingsWallet.map((item, i) => (
                            <div key={i} className="flex h-full">
                                <LearnCard {...item} />
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default Learn;
