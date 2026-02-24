import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ChevronLeft,
    Calendar,
    MapPin,
    CreditCard,
    User,
    Phone,
    Mail,
    Download,
    CheckCircle2,
    ArrowRight,
    Clock
} from 'lucide-react';

const BookingDetails = () => {
    const { id } = useParams();

    // Dummy booking detail based on the ID
    const booking = {
        id: id,
        bookingRef: `TGC-BK-2024-${id.padStart(3, '0')}`,
        tourName: id === '1' ? 'Sylhet Adventure' : id === '2' ? 'Sajek Valley Tour' : 'Cox\'s Bazar Escape',
        status: id === '1' ? 'Upcoming' : 'Completed',
        date: id === '1' ? 'March 15, 2024' : id === '2' ? 'February 10, 2024' : 'January 20, 2024',
        bookedOn: 'January 15, 2024',
        paymentStatus: 'Paid',
        paymentMethod: 'bKash',
        amount: id === '1' ? '৳4,500' : id === '2' ? '৳6,200' : '৳3,800',
        customer: {
            name: 'Jahidul Islam',
            email: 'jahidul@tgc.com',
            phone: '01968-011040'
        },
        slots: id === '1' ? 2 : 1
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                    <Link to="/my-bookings" className="text-sm text-slate-500 hover:text-indigo-400 flex items-center gap-1 mb-2 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Bookings
                    </Link>
                    <h1 className="text-3xl font-bold text-white">Booking Details</h1>
                    <p className="text-slate-500 mt-1">Reference: <span className="text-indigo-400 font-mono">{booking.bookingRef}</span></p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 glass rounded-xl hover:bg-white/10 transition-all border border-white/10 font-bold text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                    <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border ${booking.status === 'Upcoming'
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : 'bg-green-500/10 text-green-400 border-green-500/20'
                        }`}>
                        {booking.status}
                    </span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Trip Summary */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-8 border-b border-white/5">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <MapPin className="w-6 h-6 text-indigo-400" />
                                {booking.tourName}
                            </h2>
                        </div>
                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Departure Date</p>
                                <p className="text-lg font-semibold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-slate-400" />
                                    {booking.date}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Booking Date</p>
                                <p className="text-lg font-semibold flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-slate-400" />
                                    {booking.bookedOn}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Reserved Slots</p>
                                <p className="text-lg font-semibold flex items-center gap-2">
                                    <User className="w-5 h-5 text-slate-400" />
                                    {booking.slots} Adult(s)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Total Amount</p>
                                <p className="text-lg font-semibold text-indigo-400">
                                    {booking.amount}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Customer Information */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <User className="w-5 h-5 text-slate-400" />
                            Customer Information
                        </h3>
                        <div className="bg-white/5 border border-white/5 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Full Name</p>
                                <p className="font-semibold">{booking.customer.name}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                                <p className="font-semibold">{booking.customer.email}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Phone Number</p>
                                <p className="font-semibold">{booking.customer.phone}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Payment Breakdown Sidebar */}
                <div className="space-y-6">
                    <section className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl space-y-6">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-indigo-400" />
                            Payment Status
                        </h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Base Fare</span>
                                <span className="text-white font-medium">{booking.amount}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Service Fee</span>
                                <span className="text-white font-medium">৳0</span>
                            </div>
                            <div className="pt-4 border-t border-white/5 flex justify-between items-center font-bold">
                                <span>Total Paid</span>
                                <span className="text-indigo-400 text-xl">{booking.amount}</span>
                            </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                            <div>
                                <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Fully Paid</p>
                                <p className="text-[10px] text-slate-400">via {booking.paymentMethod}</p>
                            </div>
                        </div>
                    </section>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Need help with your booking? Contact our support team or check your e-ticket for details.
                        </p>
                        <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-sm transition-all border border-white/5 flex items-center justify-center gap-2">
                            Contact Support
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
