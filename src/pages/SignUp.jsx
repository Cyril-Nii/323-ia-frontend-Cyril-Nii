import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { apiRegister } from '../services/api.js';
import {
    SignUpShell,
    BlueButton,
    DarkInput,
} from '../components/auth/signup/SignUpPrimitives.jsx';

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPw, setShowPw] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!email.trim() || password.length < 8) return;

        setError('');
        try {
            const data = await apiRegister(name, email, password);
            login(data.user);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <SignUpShell>
            <form onSubmit={handleRegister}>
                <h1 className="text-[1.75rem] font-bold text-white mb-2">Create your account</h1>
                
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
                {error && <p className="text-red-400 text-sm mb-1">{error}</p>}
                <BlueButton type="submit" disabled={!email.trim() || password.length < 8 || !name.trim()}>Create Account</BlueButton>

                <p className="text-center text-[0.875rem] text-[#5B616E] mt-4">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-[#0052FF] hover:underline font-medium">Sign in</Link>
                </p>
            </form>
        </SignUpShell>
    );
};

export default SignUp;
