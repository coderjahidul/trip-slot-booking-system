import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/10 bg-slate-900/50 pt-16 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1 space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <span className="text-3xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TGC</span>
                            <span className="hidden md:block text-xl font-bold text-slate-200 group-hover:text-white transition-colors">Travel Group of Cumilla</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Travel Group of Cumilla (TGC) - Your trusted partner for domestic and international travel. From Air Tickets to Visa Processing, we handle it all.
                        </p>
                        <div className="space-y-2 pt-2">
                            <p className="flex items-center gap-3 text-slate-300 text-sm">
                                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                01968-01 10 40
                            </p>
                            <p className="flex items-start gap-3 text-slate-300 text-sm">
                                <svg className="w-4 h-4 mt-1 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Shop #24, 1st Floor, Sonali Square, Monoharpur, Cumilla.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Air Tickets</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Visa Processing</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Umrah Packages</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Corporate Tours</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Safety Information</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/20">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/20">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/20">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© 2026 Travel Group of Cumilla. All rights reserved.</p>
                    <p className="flex gap-4">
                        <span>Designed with ♥ for TGC</span>
                        <span className="hidden md:inline">•</span>
                        <span>Proprietor: Jahidul</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
