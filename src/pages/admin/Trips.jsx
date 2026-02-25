import React, { useState } from 'react';
import { Map, Plus, Filter, Search, Edit2, Trash2, X, Image as ImageIcon, Calendar, Clock, DollarSign, Users as UsersIcon } from 'lucide-react';

const AdminTrips = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTrip, setEditingTrip] = useState(null);

    const [trips, setTrips] = useState([
        { id: 1, title: 'Everest Base Camp', location: 'Nepal', price: '1200', bookings: 12, status: 'upcoming', duration: '12 Days', maxBookings: 15 },
        { id: 2, title: 'Sundarbans Adventure', location: 'Bangladesh', price: '350', bookings: 24, status: 'active', duration: '3 Days', maxBookings: 30 },
        { id: 3, title: 'Kyoto Cultural Tour', location: 'Japan', price: '850', bookings: 8, status: 'active', duration: '7 Days', maxBookings: 12 },
        { id: 4, title: 'Swiss Alps Hiking', location: 'Switzerland', price: '1500', bookings: 5, status: 'completed', duration: '10 Days', maxBookings: 10 },
    ]);

    const openModal = (trip = null) => {
        setEditingTrip(trip);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingTrip(null);
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Trips</h1>
                    <p className="text-slate-400 mt-2">Create, edit and manage available tour packages.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
                >
                    <Plus className="w-5 h-5" />
                    Create New Trip
                </button>
            </header>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="relative flex-grow w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search trips by title or location..."
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                </div>
                <div className="flex gap-2 shrink-0">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-white/5 text-sm font-medium transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none transition-all">
                        <option>Status: All</option>
                        <option>Active</option>
                        <option>Upcoming</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>

            {/* Trips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {trips.map((trip) => (
                    <div key={trip.id} className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
                        <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-slate-700 transition-all relative overflow-hidden">
                            <Map className="w-16 h-16 opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-bottom p-6 flex-col justify-end">
                                <span className={`self-start px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${trip.status === 'active' ? 'bg-green-500 text-white' : 'bg-slate-500 text-white'}`}>
                                    {trip.status}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 space-y-5">
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{trip.title}</h3>
                                <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                                    <Map className="w-3 h-3" /> {trip.location}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Price</p>
                                    <p className="text-lg font-bold text-indigo-400 mt-1">${trip.price}</p>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Duration</p>
                                    <p className="text-white font-semibold mt-1">{trip.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="text-sm font-medium text-slate-400">
                                    <span className="text-white font-bold">{trip.bookings}</span> / {trip.maxBookings} Booked
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => openModal(trip)}
                                        className="p-2 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg transition-all"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-slate-900 w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Modal Header */}
                        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div>
                                <h2 className="text-2xl font-bold">{editingTrip ? 'Edit Trip Package' : 'Create New Trip'}</h2>
                                <p className="text-sm text-slate-400 mt-1">Fill in the details for the tour package</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form className="p-8 space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
                            <div className="space-y-4">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Basic Information</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Trip Title</label>
                                        <input
                                            type="text"
                                            defaultValue={editingTrip?.title}
                                            placeholder="Ex: Everest Base Camp Expedition"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Location</label>
                                        <input
                                            type="text"
                                            defaultValue={editingTrip?.location}
                                            placeholder="Ex: Solukhumbu, Nepal"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pricing & Logistics</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Price ($)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <input
                                                type="number"
                                                defaultValue={editingTrip?.price}
                                                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Duration</label>
                                        <div className="relative">
                                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <input
                                                type="text"
                                                defaultValue={editingTrip?.duration}
                                                placeholder="Ex: 12 Days"
                                                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Max Bookings</label>
                                        <div className="relative">
                                            <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <input
                                                type="number"
                                                defaultValue={editingTrip?.maxBookings}
                                                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Status</label>
                                <select
                                    defaultValue={editingTrip?.status || 'active'}
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none"
                                >
                                    <option value="active">Active</option>
                                    <option value="upcoming">Upcoming</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Description</label>
                                <textarea
                                    rows="4"
                                    placeholder="Describe the trip route, highlights, and inclusions..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"
                                />
                            </div>

                            <div className="bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/10 flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-lg">
                                    <ImageIcon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm font-bold">Trip Media</p>
                                    <p className="text-xs text-slate-500">Upload images for the tour gallery</p>
                                </div>
                                <button type="button" className="bg-indigo-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-500 transition-all">
                                    Browse
                                </button>
                            </div>
                        </form>

                        {/* Modal Footer */}
                        <div className="px-8 py-6 border-t border-white/5 flex justify-end gap-3 bg-white/5">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                            >
                                Cancel
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
                                {editingTrip ? 'Update Changes' : 'Create Package'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTrips;
