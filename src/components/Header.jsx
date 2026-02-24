import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Home,
    Info,
    Map,
    Image as ImageIcon,
    Users,
    Mail,
    ClipboardList,
    LogOut,
    Menu,
    X,
    User
} from 'lucide-react';

const Header = () => {
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
        { name: 'Home', path: '/', isLink: true, icon: <Home className="w-5 h-5" /> },
        { name: 'About', path: '#about', icon: <Info className="w-5 h-5" /> },
        { name: 'Tours', path: '#tours', icon: <Map className="w-5 h-5" /> },
        { name: 'Gallery', path: '#gallery', icon: <ImageIcon className="w-5 h-5" /> },
        { name: 'Team', path: '#team', icon: <Users className="w-5 h-5" /> },
        { name: 'Contact', path: '#contact', icon: <Mail className="w-5 h-5" /> },
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
                            <Link to="/dashboard" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                                <div className="flex flex-col items-end">
                                    <span className="text-sm font-bold">{user.name || 'Jahidul Islam'}</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Traveler</span>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-indigo-500/20 overflow-hidden">
                                    <img
                                        src={user.avatar || 'https://avatars.githubusercontent.com/u/79420197?v=4'}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-red-500/10 group transition-all"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                            </button>
                        </div>
                    ) : (
                        null
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
