import TourCard from "../TourCard";

const TourList = ({ tours }) => {
    return (
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
    );
};

export default TourList;
