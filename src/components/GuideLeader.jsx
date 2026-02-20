import React from 'react';

const GuideLeader = () => {
    return (
        <section id="guide" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="card glass border-white/10 overflow-hidden relative">
                    <div className="grid lg:grid-cols-5 gap-0">
                        {/* Image Side */}
                        <div className="lg:col-span-2 relative h-[500px] lg:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700">
                                {/* Fallback/Stylized background since image generation is capacity limited */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-[20rem] select-none">
                                    TGC
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="w-full aspect-square rounded-[3rem] bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-7xl font-black text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                    GL
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10">
                                <p className="text-white font-bold text-xl mb-1 text-center">Certified Senior Guide</p>
                                <div className="flex justify-center gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-3 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
                            <header className="space-y-4">
                                <div className="inline-block px-4 py-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                                    Meet Your Leader
                                </div>
                                <h2 className="text-5xl font-black text-white leading-tight">
                                    The Captain of <br />
                                    <span className="text-indigo-400">Your Adventures.</span>
                                </h2>
                            </header>

                            <p className="text-slate-400 text-xl leading-relaxed italic">
                                "Travel is the only thing you buy that makes you richer. My mission is to guide you
                                through the most profound experiences of your life, ensuring every step is safe and every
                                moment is meaningful."
                            </p>

                            <div className="space-y-6">
                                <h4 className="text-white font-bold text-lg uppercase tracking-widest flex items-center gap-4">
                                    Expertise & Achievements
                                    <div className="h-px bg-white/10 flex-grow" />
                                </h4>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                            15+ Years Expedition Leadership
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                            Certified Wilderness Expert
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                            Language Mastery: 5+ Dialects
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-300">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                            Advanced Rescue & First Aid
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-8 flex items-center gap-8">
                                <div className="space-y-1">
                                    <p className="text-2xl font-black text-white uppercase tracking-tighter">Chief Leader</p>
                                    <p className="text-indigo-400 text-sm font-bold tracking-widest uppercase">Travel Group of Cumilla</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="btn-primary py-4 px-8 font-black uppercase tracking-widest text-sm">
                                        Ask a Question
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideLeader;
