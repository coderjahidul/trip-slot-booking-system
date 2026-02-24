import React from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Calendar,
    ChevronRight,
    CheckCircle2,
    Clock,
    Briefcase,
    ExternalLink
} from 'lucide-react';

const MyBookings = () => {
    // Dummy data for trips (same as dashboard for consistency)
    const dummyTrips = [
        { id: 1, name: 'Sylhet Adventure', date: '2024-03-15', status: 'Upcoming', price: '৳4,500' },
        { id: 2, name: 'Sajek Valley Tour', date: '2024-02-10', status: 'Completed', price: '৳6,200' },
        { id: 3, name: 'Cox\'s Bazar Escape', date: '2024-01-20', status: 'Completed', price: '৳3,800' },
        { id: 4, name: 'Saint Martin Island', date: '2023-12-12', status: 'Completed', price: '৳5,500' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="border-b border-white/5 pb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">My Bookings</h1>
                <p className="text-slate-500 mt-2">View and manage all your trip reservations</p>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {dummyTrips.map((trip) => (
                    <div key={trip.id} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:bg-white/10 transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                <MapPin className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">{trip.name}</h4>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {trip.date}
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                    <div className="text-xs text-indigo-400 font-bold tracking-wider uppercase">
                                        ID: #TRP-00{trip.id}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-white/5">
                            <div className="text-right hidden sm:block">
                                <p className="text-lg font-bold text-white">{trip.price}</p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Total Paid</p>
                            </div>

                            <div className="flex flex-col items-end gap-3 flex-grow md:flex-grow-0">
                                <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border ${trip.status === 'Upcoming'
                                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                                    : 'bg-green-500/10 text-green-400 border-green-500/20'
                                    }`}>
                                    {trip.status === 'Upcoming' ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                                    {trip.status}
                                </span>

                                <Link
                                    to={`/my-bookings/${trip.id}`}
                                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
                                >
                                    View Details
                                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {dummyTrips.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-400">No Bookings Yet</h3>
                    <p className="text-slate-500 mt-2 mb-8">Start exploring amazing destinations and book your first trip!</p>
                    <Link to="/" className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold">
                        Browse Tours
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
