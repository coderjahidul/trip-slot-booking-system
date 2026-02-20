import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div className="inline-block px-4 py-2 glass rounded-lg border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">
                            About Our Agency
                        </div>
                        <h2 className="text-5xl font-bold leading-tight">
                            Leading The Way In <br />
                            <span className="text-indigo-400">Travel & Adventure.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Based in the heart of Cumilla, Travel Group of Cumilla (TGC) has been a pioneer in creating
                            unforgettable travel experiences. We believe that travel is not just about visiting places,
                            but about creating stories that last a lifetime.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <h4 className="font-bold text-xl">Travel Safety</h4>
                                <p className="text-slate-500 text-sm">Your safety is our top priority during every journey.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h4 className="font-bold text-xl">Best Pricing</h4>
                                <p className="text-slate-500 text-sm">We provide the most competitive rates for all packages.</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-3 text-white font-bold group pt-4">
                            Learn More About Us
                            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-all border border-white/10 group-hover:border-indigo-500">
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </button>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-all duration-700">
                            <img src="/images/sylhet.png" alt="Travel Group" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-pulse" />

                        <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-white/20 z-20 hidden md:block animate-bounce-slow">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                            <p className="text-4xl font-black text-white">10+ Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
