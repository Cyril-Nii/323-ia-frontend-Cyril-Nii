import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { apiRegister } from '../services/api.js';
import {
    SignUpShell,
    BlueButton,
    DarkButton,
    DarkInput,
    DarkSelect,
    GoogleIcon,
    AppleIcon,
    IdCardIcon,
    ChevronRightIcon,
} from '../components/auth/signup/SignUpPrimitives.jsx';
import { COUNTRY_OPTIONS, ID_TYPE_OPTIONS } from '../data/signupData.js';

const CountryOptions = () => (
    <>
        {COUNTRY_OPTIONS.map((country) => (
            <option key={country.value} value={country.value}>
                {country.flag} {country.label}
            </option>
        ))}
    </>
);

const VerifyingAddressStep = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
            <div className="mb-8">
                <div className="w-32 h-32 rounded-full bg-blue-60 flex items-center justify-center mx-auto">
                    <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
                        <rect x="12" y="8" width="24" height="32" rx="2" fill="white" fillOpacity="0.9" />
                        <rect x="16" y="16" width="16" height="2" rx="1" fill="#0052FF" />
                        <rect x="16" y="22" width="16" height="2" rx="1" fill="#0052FF" />
                        <rect x="16" y="28" width="8" height="2" rx="1" fill="#0052FF" />
                        <circle cx="24" cy="36" r="2" fill="#0052FF" />
                    </svg>
                </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 text-center">Verifying your address...</h1>
            <p className="text-[#8A919E] text-center">Address verification is in progress</p>
        </div>
    </div>
);

const AddressFailStep = ({ onRetry }) => (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
            <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/verifyInfo-3.svg" alt="Document missing address" className="w-32 h-32 mb-8" />
            <h1 className="text-2xl font-bold text-white mb-2 text-center">Document missing address</h1>
            <p className="text-[#8A919E] text-center mb-6 max-w-md">We are unable to verify your address because your document is missing your address. Try again and make sure you choose a document that contains the following:</p>
            <ul className="text-white text-lg list-disc pl-6 mb-8 text-left">
                <li>Full legal name</li>
                <li>Residential address</li>
                <li>Document Date</li>
            </ul>
            <button className="w-64 h-14 rounded-full bg-blue-60 hover:bg-[#1a5cff] text-white font-bold text-lg" onClick={onRetry}>Try Again</button>
        </div>
    </div>
);

const VerifyAddressStep = ({ onNext, onFile }) => {
    const fileInputRef = useRef(null);

    return (
        <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
                <h2 className="text-lg font-semibold text-white mb-4">Upload a proof of address</h2>
                <p className="text-[#8A919E] mb-8">Regulations require us to collect a document to verify the address you provided. Follow the instructions below:</p>
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="#5B616E"/><path d="M7 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="#fff"/><rect x="16" y="7" width="4" height="4" rx="1" fill="#fff"/><path d="M18 9.5l1 1 2-2" stroke="#00A87A" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <div>
                            <div className="font-semibold text-white">Prepare your documents</div>
                            <div className="text-[#8A919E] text-sm">Upload a copy of your bank statement, utility bill or credit card statement in your name alone.<br/><a href="#" className="text-[#0052FF] underline">See other valid forms of documents.</a></div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#23262B] rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#5B616E"/><rect x="7" y="7" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/><polygon points="12,18 10,16 14,16" fill="#0052FF"/></svg>
                        </div>
                        <div>
                            <div className="font-semibold text-white">Upload a document in English</div>
                            <div className="text-[#8A919E] text-sm">We can only accept documents that are in English. Documents in other languages will not be accepted.</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-[#16181C] rounded-xl border border-[#23262B] py-10 px-6 mb-8">
                    <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/spotSquare/svg/dark/commerceInvoices-3.svg" alt="Upload" className="w-24 h-24 mb-4" />
                    <button
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00A87A] mb-4"
                        onClick={() => fileInputRef.current?.click()}
                        aria-label="Upload document"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#00A87A"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                    <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,application/pdf" className="hidden" onChange={(e) => { if (e.target.files[0]) onFile(e.target.files[0]); }} />
                    <div className="text-white font-medium mb-2">Upload or drag and drop a copy of your chosen document.</div>
                    <div className="text-[#8A919E] mb-6">Accepted formats: PNG, JPEG, or PDF.</div>
                    <button className="w-48 h-12 rounded-full bg-[#0052FF] hover:bg-[#1a5cff] text-white font-semibold text-lg" onClick={() => fileInputRef.current?.click()}>Browse files</button>
                </div>
                <div className="mb-8">
                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#161C2B] text-white font-semibold text-left">
                        Other valid forms of documents
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B616E" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                    </button>
                </div>
                <div className="bg-[#00113A] rounded-lg p-4 flex items-center gap-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#0052FF"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div className="text-[#C7D1E0] text-sm">Your document will only be used to verify your address. No other information on the document will be associated with your account.</div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <BlueButton onClick={onNext}>Continue</BlueButton>
                </div>
            </div>
        </div>
    );
};

const PreviewAddressStep = ({ file, onConfirm, onReupload }) => (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Verify your address</h1>
            <h2 className="text-lg font-semibold text-white mb-4">Is this document easy to read?</h2>
            <p className="text-[#8A919E] mb-6">Make sure that the address listed on your document and the address you entered on Coinbase match exactly.</p>
            <div className="flex flex-col items-center mb-8">
                {file && file.type.startsWith('image') ? (
                    <img src={URL.createObjectURL(file)} alt="Uploaded document" className="max-w-full max-h-[400px] rounded-xl border border-[#23262B] mb-6" />
                ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-[#16181C] rounded-xl border border-[#23262B] mb-6 text-[#8A919E]">PDF preview not available</div>
                )}
            </div>
            <div className="mb-8">
                <div className="font-bold text-white mb-2">Make sure your document is clear and not cut off.</div>
                <ul className="text-white text-lg list-disc pl-6">
                    <li>Your full name</li>
                    <li>Your current address</li>
                    <li>The date</li>
                    <li>The logo of the issuer</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <BlueButton onClick={onConfirm}>Yes, looks good</BlueButton>
                <DarkButton onClick={onReupload}>Re-upload</DarkButton>
            </div>
        </div>
    </div>
);

const AllSetStep = ({ onContinue }) => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="120" height="120" aria-hidden="true">
                <circle cx="120" cy="120" r="64" fill="#0052FF" />
                <path d="M99.5 119.5L114.25 134.5L145.25 104.5" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-white text-center">You're all set</h2>
        <p className="text-gray-400 mb-8 text-center">Your account has been verified successfully.</p>
        <BlueButton onClick={onContinue}>Go to Homepage</BlueButton>
    </div>
);

const StepEmail = ({ name, setName, email, setEmail, password, setPassword, error, onNext }) => {
    const [showPw, setShowPw] = useState(false);
    return (
    <SignUpShell>
        <form onSubmit={(e) => { e.preventDefault(); if (email.trim() && password.length >= 8) onNext(); }}>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">Create your account</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-4 leading-6">
                Access all that this app has to offer with a single account.
            </p>
            
            <p className="text-[0.8125rem] text-amber-400 bg-amber-950/40 border border-amber-700/40 rounded-lg px-3 py-2 mb-5">
                Demo app – do not use your real password.
            </p>
            <DarkInput label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
            <DarkInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required />
            <div className="mb-4">
                <label className="block text-[0.875rem] font-semibold text-white mb-1.5">Password</label>
                <div className="relative">
                    <input
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 8 characters"
                        className="w-full h-14 px-4 pr-12 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
                        minLength={8}
                        required
                    />
                    <button type="button" onClick={() => setShowPw(v => !v)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5B616E] hover:text-white transition-colors text-xs">
                        {showPw ? 'Hide' : 'Show'}
                    </button>
                </div>
                {password && password.length < 8 && (
                    <p className="text-red-400 text-xs mt-1">Password must be at least 8 characters.</p>
                )}
            </div>
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <BlueButton type="submit" disabled={!email.trim() || password.length < 8 || !name.trim()}>Continue</BlueButton>

            <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#2C2F36]" />
                <span className="text-[0.75rem] font-semibold text-[#5B616E] tracking-wider">OR</span>
                <div className="flex-1 h-px bg-[#2C2F36]" />
            </div>

            <div className="flex flex-col gap-3 mb-6">
                <button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
                    <GoogleIcon /> Sign up with Google
                </button>
                <button type="button" className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors">
                    <AppleIcon /> Sign up with Apple
                </button>
            </div>

            <p className="text-center text-[0.875rem] text-[#5B616E] mb-4">
                Already have an account?{' '}
                <Link to="/signin" className="text-[#0052FF] hover:underline font-medium">Sign in</Link>
            </p>
            <p className="text-center text-[0.75rem] text-[#5B616E] leading-5">
                By creating an account you certify that you are over the age of 18 and agree to our{' '}
                <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and{' '}
                <a href="#" className="underline hover:text-white transition-colors">Cookie Policy</a>.
            </p>
        </form>
    </SignUpShell>
    );
};

const StepVerifyEmail = ({ email, onNext }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const refs = useRef([]);

    useEffect(() => {
        if (timer <= 0) return;
        const id = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(id);
    }, [timer]);

    const focusAt = useCallback((i) => refs.current[i]?.focus(), []);

    const handleChange = (i, v) => {
        if (v && !/^\d$/.test(v)) return;
        const c = [...code]; c[i] = v; setCode(c);
        if (v && i < 5) focusAt(i + 1);
        if (c.every((d) => d)) setTimeout(onNext, 300);
    };

    const handleKey = (i, e) => { if (e.key === 'Backspace' && !code[i] && i > 0) focusAt(i - 1); };

    const handlePaste = (e) => {
        e.preventDefault();
        const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const c = [...code]; for (let i = 0; i < 6; i++) c[i] = p[i] || ''; setCode(c);
        focusAt(Math.min(p.length, 5));
        if (c.every((d) => d)) setTimeout(onNext, 300);
    };

    return (
        <SignUpShell>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">Enter the code we emailed you</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
                Check your email <span className="font-semibold text-white">{email}</span>.
                This helps us keep your account secure by verifying that it&apos;s really you.
            </p>
            <p className="text-[0.875rem] font-semibold text-white mb-3">Enter 6-digit code</p>
            <div className="flex gap-3 mb-6">
                {code.map((d, i) => (
                    <input
                        key={i}
                        ref={(el) => (refs.current[i] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={d}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKey(i, e)}
                        onPaste={i === 0 ? handlePaste : undefined}
                        className={`w-12 h-14 text-center text-xl font-semibold rounded-xl border bg-[#1E2025] text-white outline-none transition-colors ${d ? 'border-[#0052FF]' : 'border-[#2C2F36]'} focus:border-[#0052FF]`}
                    />
                ))}
            </div>
            <button
                onClick={timer <= 0 ? () => setTimer(30) : undefined}
                disabled={timer > 0}
                className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors mb-6 ${timer > 0 ? 'bg-[#1E2025] text-[#5B616E] cursor-not-allowed' : 'bg-[#5B8DEF] hover:bg-[#4A7DE0] text-white cursor-pointer'}`}
            >
                {timer > 0 ? `Resend code in ${timer}` : 'Resend code'}
            </button>
            <p className="text-center text-[0.875rem] text-white">
                Can&apos;t access?{' '}<a href="#" className="text-blue-60 hover:underline font-medium">Update your 2FA</a>
            </p>
        </SignUpShell>
    );
};

const StepAccountSetup = ({ onNext }) => {
    const [agreed, setAgreed] = useState(true);

    return (
        <SignUpShell>
            <div className="relative w-14 h-14 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#F7931A] absolute top-0 left-1" />
                <svg className="absolute bottom-0 left-0" width="28" height="28" viewBox="0 0 24 24" fill="#5B616E"><polygon points="12 2 2 22 22 22" /></svg>
                <div className="w-5 h-5 rounded-full bg-[#0052FF] absolute bottom-0 right-2 border-2 border-[#0A0B0D]" />
            </div>

            <h1 className="text-[1.75rem] font-bold text-white mb-2">Complete account setup</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-8 leading-6">
                <a href="#" className="text-[#0052FF] underline">Regulations</a> requires us to collect and verify your information
            </p>

            <div className="flex flex-col gap-0 mb-8">
                <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-[#00A87A] flex items-center justify-center shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <div className="w-px h-10 bg-[#2C2F36]" />
                    </div>
                    <div className="pb-6">
                        <p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">Create your account</p>
                        <p className="text-[0.8125rem] text-[#5B616E] mt-0.5">Add a password and secure your account</p>
                        <p className="text-[0.8125rem] text-[#00A87A] font-medium mt-1">Complete</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                            <span className="text-[0.75rem] font-bold text-[#0052FF]">2</span>
                        </div>
                        <div className="w-px h-10 bg-[#2C2F36]" />
                    </div>
                    <div className="pb-6">
                        <p className="text-[0.9375rem] text-white font-semibold leading-5">About you</p>
                        <p className="text-[0.8125rem] text-[#8A919E] mt-0.5">Add your personal information</p>
                        <p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Approx. 2 min
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full border border-[#2C2F36] flex items-center justify-center shrink-0">
                            <span className="text-[0.75rem] font-semibold text-[#5B616E]">3</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">Verify your identity</p>
                        <p className="text-[0.8125rem] text-[#5B616E] mt-0.5">Upload and verify your identity documents</p>
                        <p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Approx. 5 min
                        </p>
                    </div>
                </div>
            </div>

            <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-5 h-5 rounded border-[#2C2F36] bg-[#1E2025] accent-[#0052FF] cursor-pointer" />
                <span className="text-[0.8125rem] text-[#8A919E] leading-5">
					I certify that I am 18 years of age or older, I agree to the{' '}
                    <a href="#" className="underline text-white hover:text-[#0052FF]">User Agreement</a>.
				</span>
            </label>

            <BlueButton onClick={onNext} disabled={!agreed}>Submit</BlueButton>
        </SignUpShell>
    );
};

const StepEmailOptIn = ({ onNext }) => (
    <SignUpShell>
        <div className="flex flex-col items-center text-center">
            <img
                src="https://static-assets.coinbase.com/ui-infra/illustration/v1/heroSquare/svg/dark/optInPushNotificationsEmail-3.svg"
                alt="Email notifications"
                className="w-48 h-48 mb-6"
            />
            <h1 className="text-[1.75rem] font-bold text-white mb-6">Be the first to know</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-4 leading-6 max-w-sm">
                Would you like to receive emails from Coinbase on price updates, product announcements, and trading insights we think you might be interested in?
            </p>
            <p className="text-[0.9375rem] text-[#8A919E] mb-8 leading-6 max-w-sm">
                You can learn more and unsubscribe anytime via your account settings or our Support Portal.
            </p>
            <div className="w-full flex flex-col gap-3">
                <BlueButton onClick={onNext}>Yes</BlueButton>
                <DarkButton onClick={onNext}>No</DarkButton>
            </div>
        </div>
    </SignUpShell>
);

const StepCountry = ({ citizenship, setCitizenship, residence, setResidence, onNext }) => (
    <SignUpShell>
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">Where are you from?</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
                We are required to collect this information. If you&apos;re a citizen of more than one country, please pick one.
            </p>
            <DarkSelect label="Citizenship" hint="As shown on your ID document" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}>
                <CountryOptions />
            </DarkSelect>
            <DarkSelect label="Country of residence" hint="You will need to provide your ID and Proof of Address from this country" value={residence} onChange={(e) => setResidence(e.target.value)}>
                <CountryOptions />
            </DarkSelect>
            <div className="mt-2">
                <BlueButton type="submit">Continue</BlueButton>
            </div>
        </form>
    </SignUpShell>
);

const StepBirth = ({ city, setCity, country, setCountry, onNext }) => (
    <SignUpShell>
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">Enter your place of birth</h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
                Regulations require us to collect this info.
            </p>
            <DarkInput label="City of birth" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Accra" />
            <DarkSelect label="Country of birth" value={country} onChange={(e) => setCountry(e.target.value)}>
                <CountryOptions />
            </DarkSelect>
            <div className="mt-2">
                <BlueButton type="submit">Submit</BlueButton>
            </div>
        </form>
    </SignUpShell>
);

const StepIdType = ({ onSelect }) => (
    <SignUpShell>
        <h1 className="text-[1.75rem] font-bold text-white mb-6">Select your ID type</h1>
        <div className="flex flex-col gap-3 mb-6">
            {ID_TYPE_OPTIONS.map((id) => (
                <button
                    key={id.value}
                    onClick={() => onSelect(id.value)}
                    className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors text-left"
                >
                    <IdCardIcon />
                    <div className="flex-1 min-w-0">
                        <p className="text-[0.9375rem] font-semibold text-white">{id.label}</p>
                        {id.badge && <p className="text-[0.8125rem] text-[#5B616E]">{id.badge}</p>}
                    </div>
                    <ChevronRightIcon />
                </button>
            ))}
        </div>
        <div className="rounded-xl border border-[#2C2F36] bg-[#1E2025] p-4 mb-6">
            <p className="text-[0.8125rem] text-[#5B616E] leading-5">
                By selecting your ID type on this screen, you agree that our (and our service providers) collection, use, and storage of your biometric information for identity verification. Learn more in Section 5 of our{' '}
                <a href="#" className="text-[#0052FF] hover:underline">Privacy Policy</a>.
            </p>
        </div>
        <DarkButton onClick={() => onSelect(null)}>I don&apos;t have any of these IDs</DarkButton>
    </SignUpShell>
);

const StepUpload = ({ onNext, onBack }) => {
    const [front, setFront] = useState(null);
    const [back, setBack] = useState(null);
    const frontRef = useRef(null);
    const backRef = useRef(null);

    const handleFile = (setter) => (e) => {
        const file = e.target.files?.[0];
        if (file) setter(file.name);
    };

    return (
        <SignUpShell>
            <div className="text-center">
                <h1 className="text-[1.75rem] font-bold text-white mb-2">Upload images</h1>
                <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
                    Upload pictures of your photo id (JPEG or PNG).
                </p>
            </div>
            <div className="flex gap-4 mb-6">
                <button onClick={() => frontRef.current?.click()} className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
                    <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg" alt="ID" className="w-12 h-12 opacity-60" />
                    <span className="text-[0.8125rem] text-[#5B616E]">{front || 'Drag & drop or click to upload'}</span>
                </button>
                <input ref={frontRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handleFile(setFront)} />
                <button onClick={() => backRef.current?.click()} className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
                    <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg" alt="ID" className="w-12 h-12 opacity-60" />
                    <span className="text-[0.8125rem] text-[#5B616E]">{back || 'Drag & drop or click to upload'}</span>
                </button>
                <input ref={backRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handleFile(setBack)} />
            </div>
            <div className="flex gap-4 mb-6">
                <p className="flex-1 text-center text-[0.875rem] text-white font-medium">Front</p>
                <p className="flex-1 text-center text-[0.875rem] text-white font-medium">Back</p>
            </div>
            <p className="text-[0.8125rem] text-[#8A919E] text-center leading-5 mb-6">
                Please do not redact, watermark or otherwise obscure any part of your ID. This will help ensure we can verify your identity document as quickly and accurately as possible.
            </p>
            <BlueButton onClick={onNext}>Upload</BlueButton>
            <button onClick={onBack} className="w-full mt-4 text-center text-[0.875rem] text-[#0052FF] hover:underline font-medium">
                Go back
            </button>
        </SignUpShell>
    );
};

const StepVerifying = ({ onComplete }) => {
    useEffect(() => {
        // Simulate verification taking 2 seconds, then move to next step
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="px-6 pt-5">
                <a href="/"><Logo height={28} className="brightness-0 invert" /></a>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="w-28 h-28 rounded-full bg-blue-60 flex items-center justify-center mb-8 animate-pulse">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="12" y="6" width="24" height="32" rx="2" fill="white" fillOpacity="0.9" />
                        <line x1="16" y1="14" x2="32" y2="14" stroke="#0052FF" strokeWidth="1.5" />
                        <line x1="16" y1="18" x2="32" y2="18" stroke="#0052FF" strokeWidth="1.5" />
                        <line x1="16" y1="22" x2="32" y2="22" stroke="#0052FF" strokeWidth="1.5" />
                        <line x1="16" y1="26" x2="28" y2="26" stroke="#0052FF" strokeWidth="1.5" />
                        <circle cx="18" cy="32" r="1.5" fill="#0052FF" />
                        <circle cx="22" cy="32" r="1.5" fill="#0052FF" />
                        <circle cx="26" cy="32" r="1.5" fill="#0052FF" />
                    </svg>
                </div>
                <h1 className="text-[1.75rem] font-bold text-white mb-3">Verifying your identity</h1>
                <p className="text-[0.9375rem] text-[#8A919E]">This should only take a minute.</p>
            </div>
        </div>
    );
};

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [citizenship, setCitizenship] = useState('GH');
    const [residence, setResidence] = useState('GH');
    const [birthCity, setBirthCity] = useState('');
    const [birthCountry, setBirthCountry] = useState('GH');
    const [addressFile, setAddressFile] = useState(null);

    const next = async () => {
        // Step 0 -> 1: call the register API before proceeding
        if (step === 0) {
            setRegisterError('');
            try {
                const data = await apiRegister(name, email, password);
                login(data.user);
                setStep((s) => s + 1);
            } catch (err) {
                setRegisterError(err.message || 'Registration failed. Please try again.');
            }
            return;
        }
        setStep((s) => s + 1);
    };

    const back = () => setStep((s) => Math.max(0, s - 1));
    const goHome = () => navigate('/');

    switch (step) {
        case 0: return <StepEmail name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={registerError} onNext={next} />;
        case 1: return <StepVerifyEmail email={email} onNext={next} />;
        case 2: return <StepAccountSetup onNext={next} />;
        case 3: return <StepEmailOptIn onNext={next} />;
        case 4: return <StepCountry citizenship={citizenship} setCitizenship={setCitizenship} residence={residence} setResidence={setResidence} onNext={next} />;
        case 5: return <StepBirth city={birthCity} setCity={setBirthCity} country={birthCountry} setCountry={setBirthCountry} onNext={next} />;
        case 6: return <StepIdType onSelect={() => next()} />;
        case 7: return <StepUpload onNext={next} onBack={back} />;
        case 8: return <StepVerifying onComplete={next} />;
        case 9: return <AllSetStep onContinue={goHome} />;
        case 10: return <VerifyAddressStep onNext={next} onFile={(file) => { setAddressFile(file); setStep(11); }} />;
        case 11: return <PreviewAddressStep file={addressFile} onConfirm={() => setStep(12)} onReupload={() => setStep(10)} />;
        case 12: return <VerifyingAddressStep />;
        case 13: return <AddressFailStep onRetry={() => setStep(10)} />;
        default: return <StepVerifying onComplete={next} />;
    }
};

export default SignUp;
