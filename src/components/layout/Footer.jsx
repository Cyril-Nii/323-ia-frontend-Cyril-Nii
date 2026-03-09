import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import GlobalPreferencesModal from '../common/GlobalPreferencesModal.jsx';
import { FOOTER_COLUMNS, FOOTER_SOCIALS } from '../../data/footerData.js';

/* ── Sub-components ── */
const FooterSection = ({ title, links }) => (
    <div className="flex flex-col gap-3">
        <span className="text-[0.875rem] leading-5 font-semibold text-gray-100">{title}</span>
        <div className="flex flex-col gap-2">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors duration-150"
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>
);

const CoinbaseLogo = ({ height = 60 }) => (
    <img
        src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
        alt="Coinbase"
        height={height}
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
    />
);

/* ── Footer ── */
const Footer = () => {
    const [modalOpen, setModalOpen]   = useState(false);
    const [country, setCountry]       = useState('Global');
    const [language, setLanguage]     = useState('English');

    return (
        <footer className="flex flex-col items-center bg-gray-10 w-full">
            <div className="w-full max-w-400 pt-12 pb-8 md:px-8 md:pt-16 md:max-w-307 lg:px-12 lg:pt-20 lg:max-w-400">

                {/* Logo — mobile only */}
                <div className="mb-8 lg:hidden">
                    <CoinbaseLogo />
                </div>

                {/* Main columns row */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Logo column — desktop only */}
                    <div className="hidden lg:flex flex-col shrink-0 w-18 pt-0.5">
                        <CoinbaseLogo />
                    </div>

                    {/* 4 content columns */}
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.id} className="flex flex-col gap-10 flex-1">
                            {col.sections.map((section) => (
                                <FooterSection key={section.title} title={section.title} links={section.links} />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom area */}
                <div className="flex flex-col gap-4 mt-12">
                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {FOOTER_SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Coinbase ${s.label} page`}
                                className="opacity-100 hover:opacity-70 transition-opacity duration-150"
                            >
                                <img src={s.icon} alt={`${s.label} logo`} width={16} height={16} loading="lazy" />
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <hr className="w-full border-0 border-t border-gray-15 my-2" />

                    {/* Copyright + legal + locale row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        {/* Left: copyright + legal links */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <p className="text-[0.8125rem] leading-5 text-gray-100 m-0">
                                © {new Date().getFullYear()} Coinbase
                            </p>
                            <span className="text-gray-40 text-[0.8125rem]">•</span>
                            <a href="#" className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
                                Privacy
                            </a>
                            <span className="text-gray-40 text-[0.8125rem]">•</span>
                            <a href="#" className="text-[0.8125rem] leading-5 text-gray-60 hover:text-gray-100 transition-colors">
                                Terms &amp; Conditions
                            </a>
                        </div>

                        {/* Right: locale selector button */}
                        <button
                            onClick={() => setModalOpen(true)}
                            className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-60">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                            <span className="text-[0.8125rem] leading-5 text-gray-60">{country}</span>
                            <span className="text-gray-40 text-[0.8125rem]">•</span>
                            <span className="text-[0.8125rem] leading-5 text-gray-60">{language}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Global Preferences Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <GlobalPreferencesModal
                        onClose={() => setModalOpen(false)}
                        country={country}
                        language={language}
                        onCountryChange={setCountry}
                        onLanguageChange={setLanguage}
                    />
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
