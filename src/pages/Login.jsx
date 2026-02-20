import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error, setError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            // Error is handled by context but we can also use local state if needed
        }
    };

    return (
        <div className="max-w-md mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="card p-8">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-slate-400">Log in to manage your bookings</p>
                </header>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Email or Phone Number</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="block text-sm font-medium text-slate-400">Password</label>
                            <a href="#" className="text-sm text-indigo-400 hover:underline">Forgot?</a>
                        </div>
                        <input
                            required
                            type="password"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full btn-primary disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <p className="text-center mt-8 text-slate-400 text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-indigo-400 font-bold hover:underline" onClick={() => setError(null)}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
