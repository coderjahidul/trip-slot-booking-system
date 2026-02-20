import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden rounded-3xl mb-24">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/nepal.png"
                    alt="Travel Background"
                    className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                        Explore the World with TGC
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
                        Your Journey <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Starts Here.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Travel Group of Cumilla (TGC) offers exclusive domestic and international tour packages.
                        Experience the world's most beautiful destinations with comfort and professional guidance.
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a href="#tours" className="btn-primary py-4 px-10 text-lg font-bold">
                            View Packages
                        </a>
                        <Link to="/register" className="glass py-4 px-10 text-lg font-bold border border-white/10 hover:bg-white/10 transition-all rounded-xl">
                            Join Community
                        </Link>
                    </div>

                    <div className="flex items-center gap-12 pt-12 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold">12k+</p>
                            <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">Happy Travelers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">4.9/5</p>
                            <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">Highly Rated</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">150+</p>
                            <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">Guided Tours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="299.5" stroke="white" strokeDasharray="10 10" />
                    <circle cx="300" cy="300" r="249.5" stroke="white" strokeDasharray="5 5" opacity="0.5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
