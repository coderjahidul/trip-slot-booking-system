import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Map, Plus, Filter, Search, Edit2, Trash2, X,
    Image as ImageIcon, Calendar, Clock, DollarSign,
    Users as UsersIcon, LayoutGrid, List, Eye, ShieldCheck
} from 'lucide-react';

const AdminTrips = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTrip, setEditingTrip] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    // Mock Guides Data (In real app, fetch from users API)
    const guides = [
        { id: 'g1', name: 'John Doe' },
        { id: 'g2', name: 'Sarah Wilson' },
        { id: 'g3', name: 'Mike Johnson' },
    ];

    const [trips, setTrips] = useState(() => {
        const saved = localStorage.getItem('tgc_trips');
        if (saved) return JSON.parse(saved);
        return [
            { id: 1, title: 'Everest Base Camp', location: 'Nepal', price: '1200', bookings: 12, status: 'upcoming', duration: '12 Days', maxBookings: 15, guideId: 'g1', description: 'Experience the roof of the world.' },
            { id: 2, title: 'Sundarbans Adventure', location: 'Bangladesh', price: '350', bookings: 24, status: 'active', duration: '3 Days', maxBookings: 30, guideId: 'g2', description: 'Discover the world\'s largest mangrove forest.' },
            { id: 3, title: 'Kyoto Cultural Tour', location: 'Japan', price: '850', bookings: 8, status: 'active', duration: '7 Days', maxBookings: 12, guideId: 'g3', description: 'Explore ancient temples and vibrant gardens.' },
        ];
    });

    useEffect(() => {
        localStorage.setItem('tgc_trips', JSON.stringify(trips));
    }, [trips]);

    const openModal = (trip = null) => {
        setEditingTrip(trip);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingTrip(null);
    };

    const handleSaveTrip = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const tripData = {
            id: editingTrip ? editingTrip.id : Date.now(),
            title: formData.get('title'),
            location: formData.get('location'),
            price: formData.get('price'),
            duration: formData.get('duration'),
            maxBookings: formData.get('maxBookings'),
            status: formData.get('status'),
            guideId: formData.get('guideId'),
            description: formData.get('description'),
            bookings: editingTrip ? editingTrip.bookings : 0,
        };

        if (editingTrip) {
            setTrips(trips.map(t => t.id === editingTrip.id ? tripData : t));
        } else {
            setTrips([...trips, tripData]);
        }
        closeModal();
    };

    const handleDeleteTrip = (id) => {
        if (window.confirm('Are you sure you want to delete this trip package?')) {
            setTrips(trips.filter(t => t.id !== id));
        }
    };

    const getGuideName = (id) => guides.find(g => g.id === id)?.name || 'Unassigned';

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
                    <div className="flex bg-slate-800 rounded-xl border border-white/5 p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-white'}`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-white'}`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
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

            {/* Trips Grid View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {trips.map((trip) => (
                        <div key={trip.id} className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
                            <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-slate-700 transition-all relative overflow-hidden">
                                <Map className="w-16 h-16 opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-bottom p-6 flex-col justify-end">
                                    <span className={`self-start px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${trip.status === 'active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-500/20 text-slate-400 border border-white/10'}`}>
                                        {trip.status}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <button
                                        onClick={() => navigate(`/admin/trips/${trip.id}`)}
                                        className="p-2 bg-white text-slate-950 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{trip.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-slate-500 text-xs flex items-center gap-1">
                                            <Map className="w-3 h-3" /> {trip.location}
                                        </p>
                                        <p className="text-[10px] font-bold text-indigo-400 flex items-center gap-1 uppercase tracking-widest bg-indigo-500/5 px-2 py-0.5 rounded-md border border-indigo-500/10">
                                            <ShieldCheck className="w-3 h-3" /> {getGuideName(trip.guideId)}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
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
                                    <div className="text-xs font-medium text-slate-400">
                                        <span className="text-white font-bold">{trip.bookings}</span> / {trip.maxBookings} Booked
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openModal(trip)}
                                            className="p-2 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg transition-all"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteTrip(trip.id)}
                                            className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Trips List View */
                <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5">
                                <th className="px-6 py-4">Package</th>
                                <th className="px-6 py-4">Guide / Staff</th>
                                <th className="px-6 py-4">Pricing</th>
                                <th className="px-6 py-4">Bookings</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {trips.map((trip) => (
                                <tr key={trip.id} className="hover:bg-white/5 transition-colors group/row">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">
                                                <Map className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-white uppercase tracking-tight">{trip.title}</p>
                                                <p className="text-[10px] text-slate-500 font-medium">{trip.location} • {trip.duration}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold border border-white/5">
                                                {getGuideName(trip.guideId).charAt(0)}
                                            </div>
                                            <span className="text-xs font-semibold text-slate-300">{getGuideName(trip.guideId)}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-black text-indigo-400 text-sm">${trip.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1.5 w-24">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                                <span>{Math.round((trip.bookings / trip.maxBookings) * 100)}%</span>
                                                <span className="text-slate-500">{trip.bookings}/{trip.maxBookings}</span>
                                            </div>
                                            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500" style={{ width: `${(trip.bookings / trip.maxBookings) * 100}%` }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border ${trip.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-slate-500/10 text-slate-400 border-white/10'}`}>
                                            {trip.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover/row:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                            <button
                                                onClick={() => navigate(`/admin/trips/${trip.id}`)}
                                                className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-all"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => openModal(trip)}
                                                className="p-1.5 hover:bg-indigo-500/10 text-indigo-400 rounded-lg transition-all"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTrip(trip.id)}
                                                className="p-1.5 hover:bg-red-500/10 text-red-400 rounded-lg transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

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
                        <form onSubmit={handleSaveTrip} className="p-8 space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
                            <div className="space-y-4">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Basic Information</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Trip Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            defaultValue={editingTrip?.title}
                                            required
                                            placeholder="Ex: Everest Base Camp Expedition"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs text-slate-500 ml-1">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            defaultValue={editingTrip?.location}
                                            required
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
                                                name="price"
                                                defaultValue={editingTrip?.price}
                                                required
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
                                                name="duration"
                                                defaultValue={editingTrip?.duration}
                                                required
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
                                                name="maxBookings"
                                                defaultValue={editingTrip?.maxBookings}
                                                required
                                                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Status</label>
                                    <select
                                        name="status"
                                        defaultValue={editingTrip?.status || 'active'}
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none text-sm"
                                    >
                                        <option value="active">Active</option>
                                        <option value="upcoming">Upcoming</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Assign Tour Guide</label>
                                    <select
                                        name="guideId"
                                        defaultValue={editingTrip?.guideId || ''}
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none text-sm"
                                    >
                                        <option value="">Select a guide</option>
                                        {guides.map(g => (
                                            <option key={g.id} value={g.id}>{g.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Description</label>
                                <textarea
                                    name="description"
                                    rows="4"
                                    defaultValue={editingTrip?.description}
                                    placeholder="Describe the trip route, highlights, and inclusions..."
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"
                                />
                            </div>

                            <div className="bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/10 flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-lg">
                                    <ImageIcon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm font-bold uppercase tracking-tight">Trip Media</p>
                                    <p className="text-[10px] text-slate-500 font-bold">Upload high-quality images for the gallery</p>
                                </div>
                                <button type="button" className="bg-indigo-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
                                    Browse
                                </button>
                            </div>
                        </form>

                        {/* Modal Footer */}
                        <div className="px-8 py-6 border-t border-white/5 flex justify-end gap-3 bg-white/5">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={(e) => document.querySelector('form').requestSubmit()}
                                className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                            >
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
