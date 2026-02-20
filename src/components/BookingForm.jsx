import React, { useState } from 'react';

const BookingForm = ({ tourId, slot, onSubmit, loading }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl mb-6">
                <p className="text-sm text-indigo-300">Selected Slot</p>
                <p className="text-2xl font-bold"># {slot.number}</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="+1 (555) 000-0000"
                />
            </div>

            <button
                disabled={loading}
                type="submit"
                className="w-full btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
                {loading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                    </>
                ) : (
                    'Confirm Booking'
                )}
            </button>
        </form>
    );
};

export default BookingForm;
