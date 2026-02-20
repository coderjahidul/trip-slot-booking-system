import React from 'react';

const Gallery = () => {
    const images = [
        { src: '/images/nepal.png', title: 'Mountain Peaks', location: 'Nepal' },
        { src: '/images/maldives.png', title: 'Azure Waters', location: 'Maldives' },
        { src: '/images/umrah.png', title: 'Holy City', location: 'Makkah' },
        { src: '/images/sylhet.png', title: 'Tea Gardens', location: 'Sylhet' },
        { src: '/images/nepal.png', title: 'Spirituality', location: 'Kathmandu' },
        { src: '/images/maldives.png', title: 'Luxury Stay', location: 'Ocean Villas' },
    ];

    return (
        <section id="gallery" className="py-24 bg-slate-950/30 -mx-4 px-4 overflow-hidden rounded-[4rem]">
            <div className="container mx-auto px-6">
                <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 glass rounded-lg border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                        Visual Journey
                    </div>
                    <h2 className="text-5xl font-bold">Captured Moments.</h2>
                    <p className="text-slate-500">
                        Take a look at some of the breathtaking views from our previous tours.
                        Join us to capture your own memories.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 aspect-square ${index === 1 || index === 3 ? 'md:row-span-2 md:aspect-auto' : ''
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                                <p className="text-indigo-400 font-bold text-sm tracking-wider uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
