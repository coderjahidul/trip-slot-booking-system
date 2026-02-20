import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'tours', 'gallery', 'team', 'contact'];
            const scrollPosition = window.scrollY + 100;

            if (location.pathname !== '/') {
                setActiveSection('');
                return;
            }

            if (scrollPosition < 500) {
                setActiveSection('home');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/login');
    };

    const navLinks = [
        { name: 'Home', path: '/', isLink: true, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
        { name: 'About', path: '#about', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { name: 'Tours', path: '#tours', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { name: 'Gallery', path: '#gallery', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
        { name: 'Team', path: '#team', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
        { name: 'Contact', path: '#contact', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
        { name: 'My Bookings', path: '/my-bookings', isLink: true, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" /></svg> },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isMenuOpen ? 'bg-slate-950 border-transparent' : 'glass border-b border-white/10'} px-6 py-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group z-50">
                    <span className="text-3xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TGC</span>
                    <span className={`hidden sm:block text-xl font-bold transition-colors ${isMenuOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>Travel Group of Cumilla</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-8 items-center font-medium">
                    {navLinks.map((link) => {
                        const isSection = link.path.startsWith('#');
                        const sectionId = isSection ? link.path.substring(1) : '';
                        const isActive = isSection
                            ? activeSection === sectionId
                            : location.pathname === link.path;

                        return link.isLink ? (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative py-2 transition-all duration-300 hover:text-indigo-400 ${isActive ? 'text-indigo-400' : 'text-slate-300'}`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-500" />
                                )}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`relative py-2 transition-all duration-300 hover:text-indigo-400 ${isActive ? 'text-indigo-400' : 'text-slate-300'}`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-500" />
                                )}
                            </a>
                        );
                    })}

                    {user ? (
                        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-bold">{user.name}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Traveler</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-red-500/10 group transition-all"
                                title="Logout"
                            >
                                <svg className="w-5 h-5 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="px-5 py-2 glass rounded-full hover:bg-white/10 transition-all border border-white/20">
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-slate-950 lg:hidden transition-all duration-500 flex flex-col items-start justify-start pt-28 px-8 gap-6 z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {navLinks.map((link, index) => {
                        const isSection = link.path.startsWith('#');
                        const sectionId = isSection ? link.path.substring(1) : '';
                        const isActive = isSection
                            ? activeSection === sectionId
                            : location.pathname === link.path;

                        const linkContent = (
                            <>
                                <span className={`transition-transform duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-indigo-400'}`}>
                                    {link.icon}
                                </span>
                                <span className="tracking-wide">{link.name}</span>
                                {isActive && (
                                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-full" />
                                )}
                            </>
                        );

                        const commonClasses = `group relative flex items-center gap-4 text-xl font-medium transition-all duration-500 w-full py-3 px-4 rounded-xl ${isActive
                                ? 'text-indigo-400 bg-indigo-500/10'
                                : 'text-slate-300 hover:text-indigo-400 hover:bg-white/5'
                            }`;

                        return link.isLink ? (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={commonClasses}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                    opacity: isMenuOpen ? 1 : 0
                                }}
                            >
                                {linkContent}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.path}
                                className={commonClasses}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                    opacity: isMenuOpen ? 1 : 0
                                }}
                            >
                                {linkContent}
                            </a>
                        );
                    })}

                    {user ? (
                        <div
                            className="flex flex-col items-start gap-6 pt-6 border-t border-white/10 w-full transition-all duration-500"
                            style={{
                                transitionDelay: isMenuOpen ? `${navLinks.length * 50 + 100}ms` : '0ms',
                                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                opacity: isMenuOpen ? 1 : 0
                            }}
                        >
                            <div className="px-4">
                                <p className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-1">Account</p>
                                <p className="text-white text-lg font-semibold">{user.name}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full py-4 glass rounded-xl text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-3 font-semibold"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="w-full py-4 bg-indigo-600 text-white rounded-xl text-center hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-indigo-500/20"
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                transitionDelay: isMenuOpen ? `${navLinks.length * 50 + 100}ms` : '0ms',
                                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                opacity: isMenuOpen ? 1 : 0
                            }}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
