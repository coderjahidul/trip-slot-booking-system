import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const BookingSuccess = () => {
    const location = useLocation();
    const data = location.state;

    if (!data) return <Navigate to="/" />;

    const { tour, slot, customer } = data;

    return (
        <div className="max-w-2xl mx-auto py-8 md:py-12 animate-in zoom-in duration-500 px-4 sm:px-0 pb-12">
            <div className="card p-6 md:p-12 text-center relative overflow-hidden">
                {/* Animated background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

                <div className="mb-6 md:mb-8 flex justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
                        <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Booking Confirmed!</h1>
                <div className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 px-2">
                    <p>Thank you <span className="text-white font-bold">{customer.fullName}</span>,</p>
                    <p className="mt-1">your adventure is waiting for you. A confirmation email has been sent to</p>
                    <span className="text-indigo-400 font-medium break-all block mt-2">{customer.email}</span>
                </div>

                <div className="space-y-4 bg-slate-800/50 rounded-2xl p-5 md:p-6 mb-8 md:mb-10 border border-white/5 text-left text-sm md:text-base">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-slate-500">Tour</span>
                        <span className="font-bold text-right ml-4">{tour.name}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-slate-500">Date</span>
                        <span className="font-bold">{new Date(tour.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500">Selected Slot</span>
                        <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg font-bold text-lg md:text-xl">
                            # {slot.number}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/" className="flex-1 glass py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center text-sm md:text-base">
                        Plan Another Trip
                    </Link>
                    <button className="flex-1 btn-primary py-4 text-sm md:text-base">
                        Download Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingSuccess;
