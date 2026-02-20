import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-3xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TGC</span>
                    <span className="hidden md:block text-xl font-bold text-slate-200 group-hover:text-white transition-colors">Travel Group of Cumilla</span>
                </Link>
                <div className="flex gap-8 items-center font-medium">
                    <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                    <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
                    {/* <a href="#guide" className="hover:text-indigo-400 transition-colors">Guide</a> */}
                    <a href="#tours" className="hover:text-indigo-400 transition-colors">Tours</a>
                    <a href="#gallery" className="hover:text-indigo-400 transition-colors">Gallery</a>
                    <a href="#team" className="hover:text-indigo-400 transition-colors">Team</a>
                    <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                    <Link to="/my-bookings" className="hover:text-indigo-400 transition-colors">My Bookings</Link>

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
            </div>
        </nav>
    );
};

export default Navbar;
