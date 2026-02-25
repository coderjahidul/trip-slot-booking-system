import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ChevronLeft, Map, Calendar, Clock, DollarSign,
    Users as UsersIcon, ShieldCheck, Tag, Info,
    Edit2, Trash2, Camera
} from 'lucide-react';

const AdminTripDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);

    // Mock Guides Data 
    const guides = [
        { id: 'g1', name: 'John Doe', email: 'john@tgc.com' },
        { id: 'g2', name: 'Sarah Wilson', email: 'sarah@tgc.com' },
        { id: 'g3', name: 'Mike Johnson', email: 'mike@tgc.com' },
    ];

    useEffect(() => {
        const saved = localStorage.getItem('tgc_trips');
        if (saved) {
            const trips = JSON.parse(saved);
            const found = trips.find(t => t.id.toString() === id.toString());
            setTrip(found);
        }
    }, [id]);

    if (!trip) {
        return (
            <div className="flex flex-col items-center justify-center p-20 space-y-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-400">
                    <Map className="w-8 h-8 opacity-20" />
                </div>
                <h2 className="text-2xl font-bold">Trip Path Not Found</h2>
                <p className="text-slate-500">The requested trip package does not exist or has been removed.</p>
                <button
                    onClick={() => navigate('/admin/trips')}
                    className="px-6 py-2 bg-indigo-600 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20"
                >
                    Back to Logistics
                </button>
            </div>
        );
    }

    const assignedGuide = guides.find(g => g.id === trip.guideId);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/admin/trips')}
                        className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold tracking-tight uppercase">{trip.title}</h1>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border ${trip.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-slate-500/10 text-slate-400 border-white/10'}`}>
                                {trip.status}
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-medium">Logistical Analysis • ID: {trip.id}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-600/20">
                        <Edit2 className="w-4 h-4" /> Edit Package
                    </button>
                    <button className="p-2.5 bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-xl border border-white/10 transition-all">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Visuals & Core Specs */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="aspect-[16/7] bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                        <Camera className="w-16 h-16 text-slate-800 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8">
                            <p className="text-xs font-black text-indigo-400 uppercase tracking-widest opacity-80 mb-2">Primary Visual Asset</p>
                            <h2 className="text-2xl font-bold">Geometric Overview</h2>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Info className="w-5 h-5" />
                            <h3 className="font-bold uppercase tracking-widest text-sm">Strategic Description</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed italic">
                            {trip.description || 'No detailed description objective defined for this logistics package.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: 'Valuation', val: `$${trip.price}`, icon: <DollarSign className="w-4 h-4" /> },
                            { label: 'Interval', val: trip.duration, icon: <Clock className="w-4 h-4" /> },
                            { label: 'Coordinates', val: trip.location, icon: <Map className="w-4 h-4" /> },
                            { label: 'Threshold', val: `${trip.maxBookings} Units`, icon: <Tag className="w-4 h-4" /> },
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-slate-500 mb-2">
                                    {spec.icon}
                                    <span className="text-[10px] font-black uppercase tracking-widest">{spec.label}</span>
                                </div>
                                <p className="text-xl font-bold text-white">{spec.val}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Personnel & Capacity */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold uppercase tracking-widest text-sm">Capacity Matrix</h3>
                            <UsersIcon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <p className="text-3xl font-black text-white">{trip.bookings}</p>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">/ {trip.maxBookings} Active Slots</p>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                    style={{ width: `${(trip.bookings / trip.maxBookings) * 100}%` }}
                                />
                            </div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em] text-center">
                                Deployment Efficiency: {Math.round((trip.bookings / trip.maxBookings) * 100)}%
                            </p>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold uppercase tracking-widest text-sm">Personnel Assignment</h3>
                            <ShieldCheck className="w-5 h-5 text-green-400" />
                        </div>
                        {assignedGuide ? (
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-xl">
                                    {assignedGuide.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white leading-none">{assignedGuide.name}</p>
                                    <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">Field Specialist</p>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 bg-orange-500/5 rounded-2xl border border-orange-500/10 text-center space-y-2">
                                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Warning: Unassigned</p>
                                <p className="text-[10px] text-slate-500">No staff member assigned to this logistical package.</p>
                            </div>
                        )}
                        <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10">
                            Reassign Personnel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTripDetails;
