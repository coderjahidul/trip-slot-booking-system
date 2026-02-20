import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="card grid md:grid-cols-2 overflow-hidden border-none glass">
                    <div className="p-12 space-y-8 bg-indigo-600/10">
                        <header className="space-y-4">
                            <div className="inline-block px-4 py-2 glass rounded-lg border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                                Contact Us
                            </div>
                            <h2 className="text-5xl font-extrabold text-white leading-tight">
                                Reach Out <br />
                                <span className="text-slate-400">to TGC Team.</span>
                            </h2>
                        </header>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-500 transition-all duration-500 shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us Anywhere</p>
                                    <p className="text-xl font-bold text-white">01968-01 10 40</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-500 transition-all duration-500 shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Our Office</p>
                                    <p className="text-xl font-bold text-white">info@travelgroupcumilla.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-500 transition-all duration-500 shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Visit Our Office</p>
                                    <p className="text-xl font-bold text-white leading-relaxed">
                                        Shop #24, 1st Floor, Sonali Square, <br />
                                        Monoharpur, Cumilla.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-4">
                            {/* social icons would go here or reuse from footer */}
                        </div>
                    </div>

                    <div className="p-12 space-y-8 bg-slate-900/50">
                        <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all outline-none resize-none"
                            ></textarea>
                            <button className="btn-primary w-full py-5 font-black text-lg tracking-[0.2em] uppercase shadow-indigo-500/20 shadow-xl">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
