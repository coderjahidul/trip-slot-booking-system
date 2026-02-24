import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import {
    User,
    Briefcase,
    Settings,
    LogOut
} from 'lucide-react';

const UserLayout = ({ children }) => {
    const { user, logout } = useAuth();

    // Dummy user info for display if real user is missing (for UI consistency in demo)
    const dummyUser = {
        name: user?.name || 'Jahidul Islam',
        email: user?.email || 'jahidul@tgc.com',
        phone: user?.phone || '01968-011040',
        avatar: user?.avatar || 'https://avatars.githubusercontent.com/u/79420197?v=4'
    };

    const navItems = [
        { name: 'Profile', path: '/dashboard', icon: <User className="w-5 h-5" /> },
        { name: 'My Bookings', path: '/my-bookings', icon: <Briefcase className="w-5 h-5" /> },
        { name: 'Settings', path: '/user-settings', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500/30">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-3 space-y-6">
                        {/* Profile Summary Card */}
                        <div className="glass p-6 rounded-2xl border border-white/10 text-center space-y-4">
                            <div className="relative inline-block">
                                <img
                                    src={dummyUser.avatar}
                                    className="w-24 h-24 rounded-full border-4 border-indigo-500/20 mx-auto"
                                    alt="Avatar"
                                />
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{dummyUser.name}</h3>
                                <p className="text-slate-500 text-sm tracking-wide uppercase font-medium">{dummyUser.phone}</p>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-slate-400 text-sm italic">{dummyUser.email}</p>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <nav className="glass rounded-2xl border border-white/10 overflow-hidden">
                            <ul className="divide-y divide-white/5">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) => `
                                                flex items-center gap-4 px-6 py-4 text-sm font-medium transition-all
                                                ${isActive
                                                    ? 'bg-indigo-500/10 text-indigo-400 border-r-4 border-indigo-500'
                                                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                            `}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={logout}
                                        className="w-full flex items-center gap-4 px-6 py-4 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all text-left"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <section className="lg:col-span-9">
                        <div className="glass min-h-full rounded-2xl border border-white/10 p-8">
                            {children}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UserLayout;
