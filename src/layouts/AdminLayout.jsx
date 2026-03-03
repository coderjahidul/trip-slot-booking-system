import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    Users,
    Shield,
    Map,
    Settings,
    LogOut,
    ChevronDown,
    ChevronRight,
    User as UserIcon,
    Menu,
    X,
    Bell,
    ExternalLink,
    Search,
    Banknote
} from 'lucide-react';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(true);
    const [isFinancialsMenuOpen, setIsFinancialsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        {
            name: 'Dashboard',
            path: '/admin/dashboard',
            icon: <LayoutDashboard className="w-5 h-5" />
        },
        {
            name: 'Administrations',
            icon: <Shield className="w-5 h-5" />,
            hasSubmenu: true,
            isOpen: isAdminMenuOpen,
            toggle: () => setIsAdminMenuOpen(!isAdminMenuOpen),
            submenu: [
                { name: 'Users', path: '/admin/users', icon: <Users className="w-4 h-4" /> },
                { name: 'Roles', path: '/admin/roles', icon: <Shield className="w-4 h-4" /> },
            ]
        },
        {
            name: 'Trips',
            path: '/admin/trips',
            icon: <Map className="w-5 h-5" />
        },
        {
            name: 'Financials',
            icon: <Banknote className="w-5 h-5" />,
            hasSubmenu: true,
            isOpen: isFinancialsMenuOpen,
            toggle: () => setIsFinancialsMenuOpen(!isFinancialsMenuOpen),
            submenu: [
                { name: 'Office Expenses', path: '/admin/office-expenses', icon: <Banknote className="w-4 h-4" /> },
            ]
        },
        {
            name: 'Settings',
            path: '/admin/settings',
            icon: <Settings className="w-5 h-5" />
        },
    ];

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-slate-950 text-white font-sans overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`
                    ${isSidebarOpen ? 'w-64' : 'w-20'} 
                    bg-slate-900 border-r border-white/5 flex flex-col transition-all duration-300 z-50
                `}
            >
                {/* Logo Section */}
                <div className="h-16 flex items-center px-6 border-b border-white/5 gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <Map className="w-5 h-5 text-white" />
                    </div>
                    {isSidebarOpen && <span className="font-bold text-lg tracking-tight">TGC Admin</span>}
                </div>

                {/* User Info */}
                <div className="p-4 border-b border-white/5">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <UserIcon className="w-5 h-5" />
                        </div>
                        {isSidebarOpen && (
                            <div className="min-w-0">
                                <p className="font-bold text-sm truncate">{user?.name || 'Super Admin'}</p>
                                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest truncate">Administrator</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow py-4 overflow-y-auto custom-scrollbar">
                    <ul className="space-y-1 px-3">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                {item.hasSubmenu ? (
                                    <div className="space-y-1">
                                        <button
                                            onClick={item.toggle}
                                            className={`
                                                flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                                                ${item.isOpen ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                            `}
                                        >
                                            <div className="flex items-center gap-3">
                                                {item.icon}
                                                {isSidebarOpen && <span>{item.name}</span>}
                                            </div>
                                            {isSidebarOpen && (item.isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
                                        </button>
                                        {isSidebarOpen && item.isOpen && item.submenu && (
                                            <ul className="pl-4 space-y-1 mt-1 border-l border-white/5 ml-5">
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.name}>
                                                        <NavLink
                                                            to={sub.path}
                                                            className={({ isActive }) => `
                                                                flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all
                                                                ${isActive
                                                                    ? 'text-indigo-400 bg-indigo-500/10'
                                                                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                                                            `}
                                                        >
                                                            {sub.icon}
                                                            {sub.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `
                                            flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                                            ${isActive
                                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                        `}
                                    >
                                        <div className="shrink-0">{item.icon}</div>
                                        {isSidebarOpen && <span>{item.name}</span>}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom Section */}
                <div className="p-4 border-t border-white/5 space-y-2">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                        <ExternalLink className="w-5 h-5" />
                        {isSidebarOpen && <span>Visit Website</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/5 rounded-lg transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col min-w-0">
                {/* Top Navbar */}
                <header className="h-16 bg-slate-900 border-b border-white/5 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 -ml-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                        {isSidebarOpen ? <Menu className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-slate-950 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-64"
                            />
                        </div>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900" />
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-grow overflow-y-auto p-8 custom-scrollbar bg-slate-950/50">
                    <div className="max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
