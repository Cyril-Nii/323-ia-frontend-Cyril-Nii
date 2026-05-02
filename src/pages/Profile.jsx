import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { apiAddCrypto } from '../services/api.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

/* ─── Simple field wrapper ─── */
const Field = ({ label, children }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-80 mb-1">{label}</label>
        {children}
    </div>
);

const inputCls =
    "w-full h-11 px-4 rounded-lg border border-gray-20 bg-white text-gray-100 text-sm outline-none focus:border-blue-60 focus:ring-1 focus:ring-blue-60 transition-colors";

const Profile = () => {
    useDocumentTitle('My Profile | Crypto App');
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // ── Add-crypto form state ──
    const [form, setForm]       = useState({ name: '', symbol: '', price: '', image: '', change24h: '' });
    const [submitting, setSub]  = useState(false);
    const [formMsg, setFormMsg] = useState(null); // { type: 'success'|'error', text }

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleAddCrypto = async (e) => {
        e.preventDefault();
        setFormMsg(null);
        setSub(true);
        try {
            await apiAddCrypto({
                name: form.name,
                symbol: form.symbol,
                price: parseFloat(form.price),
                image: form.image,
                change24h: parseFloat(form.change24h) || 0,
            });
            setFormMsg({ type: 'success', text: `${form.name} (${form.symbol.toUpperCase()}) added successfully!` });
            setForm({ name: '', symbol: '', price: '', image: '', change24h: '' });
        } catch (err) {
            setFormMsg({ type: 'error', text: err.message || 'Failed to add crypto.' });
        } finally {
            setSub(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    // Format join date
    const joinDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
        : '—';

    return (
        <div className="min-h-screen flex flex-col bg-gray-5">
            <Header />
            <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10 sm:px-6">

                {/* ── Profile card ── */}
                <section className="bg-white rounded-2xl shadow-elevation-1 p-6 sm:p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-gray-100">My Profile</h1>
                        <button
                            onClick={handleLogout}
                            className="text-sm font-semibold text-red-60 hover:underline"
                        >
                            Sign out
                        </button>
                    </div>

                    {/* Avatar + info */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-60 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                            {user?.name?.[0]?.toUpperCase() ?? '?'}
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-100">{user?.name}</p>
                            <p className="text-sm text-gray-60">{user?.email}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-10 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-40 text-xs uppercase tracking-wider mb-1">Email</p>
                            <p className="font-medium text-gray-100">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-40 text-xs uppercase tracking-wider mb-1">Member since</p>
                            <p className="font-medium text-gray-100">{joinDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-40 text-xs uppercase tracking-wider mb-1">Account ID</p>
                            <p className="font-mono text-xs text-gray-60 break-all">{user?.id}</p>
                        </div>
                    </div>
                </section>

                {/* ── Add Crypto form ── */}
                <section className="bg-white rounded-2xl shadow-elevation-1 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-gray-100 mb-1">Add Cryptocurrency</h2>
                    <p className="text-sm text-gray-60 mb-6">
                        Add a new coin to the platform listings.
                    </p>

                    {formMsg && (
                        <div
                            className={`mb-4 px-4 py-3 rounded-lg text-sm font-medium ${
                                formMsg.type === 'success'
                                    ? 'bg-green-60/10 text-green-60 border border-green-60/30'
                                    : 'bg-red-60/10 text-red-60 border border-red-60/30'
                            }`}
                        >
                            {formMsg.text}
                        </div>
                    )}

                    <form onSubmit={handleAddCrypto} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <Field label="Name *">
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. Bitcoin"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Symbol *">
                                <input
                                    name="symbol"
                                    value={form.symbol}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. BTC"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="Price (USD) *">
                                <input
                                    name="price"
                                    type="number"
                                    min="0"
                                    step="any"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. 60000"
                                    className={inputCls}
                                />
                            </Field>
                            <Field label="24h Change (%)">
                                <input
                                    name="change24h"
                                    type="number"
                                    step="any"
                                    value={form.change24h}
                                    onChange={handleChange}
                                    placeholder="e.g. 2.5"
                                    className={inputCls}
                                />
                            </Field>
                        </div>
                        <Field label="Image URL">
                            <input
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="https://..."
                                className={inputCls}
                            />
                        </Field>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full h-12 rounded-full bg-blue-60 hover:opacity-90 disabled:opacity-50 text-white font-semibold text-sm transition-opacity mt-2"
                        >
                            {submitting ? 'Adding…' : 'Add Cryptocurrency'}
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
