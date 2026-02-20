import React, { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const { bookings, loading, error, fetchBookings } = useBooking();

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    if (loading && bookings.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-slate-400 font-medium">Retrieving your bookings...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto px-4 sm:px-0 pb-12">
            <header>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    My Bookings
                </h1>
                <p className="text-slate-400 text-sm md:text-base">
                    Manage and view your upcoming and past trip reservations.
                </p>
            </header>

            {bookings.length === 0 ? (
                <div className="card p-8 md:p-12 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mb-2">No bookings found</h2>
                    <p className="text-slate-400 mb-6 md:mb-8 text-sm md:text-base">You haven't booked any trips yet. Start your adventure today!</p>
                    <Link to="/" className="btn-primary inline-block">
                        Browse Tours
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="card p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                            <div className="flex-1 space-y-3 md:space-y-2">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-lg md:text-xl font-bold group-hover:text-indigo-400 transition-colors">{booking.tourName}</h3>
                                    <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded text-[10px] font-bold uppercase tracking-wider">
                                        Confirmed
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-indigo-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{new Date(booking.tourDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-indigo-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="truncate max-w-[150px]">{booking.customer.fullName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border border-indigo-400/50 rounded flex items-center justify-center text-[10px] font-bold text-indigo-400">#</div>
                                        <span>Slot {booking.slotNumber}</span>
                                    </div>
                                    <div className="flex items-center gap-2 col-span-full">
                                        <svg className="w-4 h-4 text-indigo-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                                        </svg>
                                        <span className="truncate">{booking.customer.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:flex-col lg:flex-row gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-white/5 md:border-none">
                                <Link
                                    to={`/tour/${booking.tourId}`}
                                    className="flex-1 md:flex-none px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all text-sm font-semibold text-center"
                                >
                                    View Event
                                </Link>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all text-sm font-semibold">
                                    E-Ticket
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
