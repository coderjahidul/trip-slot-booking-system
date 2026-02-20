import React, { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import TourCard from '../components/TourCard';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Team from '../components/Team';
import GuideLeader from '../components/GuideLeader';

const Home = () => {
    const { tours, loading, error, fetchTours } = useBooking();

    useEffect(() => {
        fetchTours();
    }, [fetchTours]);

    if (loading && tours.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-slate-400 font-medium">Loading amazing adventures...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="bg-red-500/10 text-red-500 p-6 rounded-2xl border border-red-500/20 max-w-md">
                    <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
                    <p className="mb-4">{error}</p>
                    <button onClick={fetchTours} className="btn-primary py-2 px-4 text-sm">Try Again</button>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-700">
            <Hero />

            <About />

            {/* <GuideLeader /> */}

            <section id="tours" className="py-24">
                <header className="mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 glass rounded-lg border border-white/10 text-indigo-400 font-bold text-sm tracking-widest uppercase">
                        Current Packages
                    </div>
                    <h2 className="text-5xl font-bold">Featured Expeditions.</h2>
                    <p className="text-slate-500 max-w-xl">
                        Select from our highly curated list of exotic tours and book your spot instantly.
                        Limited slots available for each journey.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </section>

            <Gallery />

            <Team />

            <Contact />
        </div>
    );
};

export default Home;
