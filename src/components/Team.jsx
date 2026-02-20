import React from 'react';

const Team = () => {
    const team = [
        {
            name: 'Md. Jahidul Islam',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 10+ years of experience in the travel industry. Committed to making travel accessible and premium for everyone in Cumilla.',
            initials: 'JI',
            image: '', // Add image path here e.g., '/images/team/jahidul.jpg'
            color: 'from-indigo-500 to-indigo-700'
        },
        {
            name: 'Abdur Rahman',
            role: 'Director of Operations',
            bio: 'Expert in logistics and group tour management. Ensures every trip runs smoothly from departure to return.',
            initials: 'AR',
            image: '',
            color: 'from-purple-500 to-purple-700'
        },
        {
            name: 'Fathima Zannat',
            role: 'Senior Travel Consultant',
            bio: 'Dedicated to providing the best support for our travelers. Expert in visa processing and package customization.',
            initials: 'FZ',
            image: '',
            color: 'from-emerald-500 to-emerald-700'
        },
        {
            name: 'Sazzad Ahmed',
            role: 'Chief Expedition Guide',
            bio: 'Passionate about history and culture. Leading our adventure treks in Nepal and domestic tours in Sylhet.',
            initials: 'SA',
            image: '',
            color: 'from-orange-500 to-orange-700'
        }
    ];

    return (
        <section id="team" className="py-24">
            <div className="container mx-auto px-6">
                <header className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-2 glass rounded-lg border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                        The Experts
                    </div>
                    <h2 className="text-5xl font-bold">Meet Our Team.</h2>
                    <p className="text-slate-500 text-lg">
                        The dedicated professionals behind Travel Group of Cumilla who work tirelessly
                        to ensure your journeys are safe, memorable, and hassle-free.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group card p-8 text-center space-y-6 hover:translate-y-[-8px] transition-all duration-500 border-white/5 hover:border-indigo-500/30"
                        >
                            <div className="relative inline-block mx-auto">
                                <div className={`w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-br ${member.color} flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform duration-500`}>
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-4xl font-black text-white">{member.initials}</span>
                                    )}
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-500 transition-colors duration-500">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                    {member.name}
                                </h4>
                                <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                                    {member.role}
                                </p>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                {member.bio}
                            </p>

                            <div className="pt-4 border-t border-white/5 flex justify-center gap-4">
                                <a href="#" className="text-slate-600 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                                <a href="#" className="text-slate-600 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
