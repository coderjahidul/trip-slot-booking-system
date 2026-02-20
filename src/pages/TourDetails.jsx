import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import SlotGrid from '../components/SlotGrid';
import BookingForm from '../components/BookingForm';

const TourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentTour, slots, loading, error, fetchTourWithSlots, handleBooking } = useBooking();
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchTourWithSlots(id);
    }, [id, fetchTourWithSlots]);

    const onBookingSubmit = async (customerData) => {
        setIsSubmitting(true);
        try {
            const result = await handleBooking(id, selectedSlot.id, customerData);
            navigate('/booking-success', {
                state: {
                    tour: currentTour,
                    slot: selectedSlot,
                    customer: customerData
                }
            });
        } catch (err) {
            // Error is handled by context
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading && !currentTour) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    if (!currentTour) return null;

    return (
        <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in duration-700">
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <button
                        onClick={() => navigate('/')}
                        className="text-slate-400 hover:text-white flex items-center gap-2 mb-6 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Tours
                    </button>

                    <div className="h-64 rounded-3xl overflow-hidden mb-8 relative">
                        <img
                            src={currentTour.image}
                            alt={currentTour.name}
                            className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    </div>

                    <h1 className="text-4xl font-bold mb-2">{currentTour.name}</h1>
                    <div className="flex flex-wrap gap-6 items-center">
                        <p className="text-slate-400 text-lg">
                            Departure: {new Date(currentTour.date).toLocaleDateString(undefined, { dateStyle: 'full' })}
                        </p>
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-bold">
                            ৳{currentTour.price.toLocaleString()}
                        </span>
                    </div>
                    {currentTour.description && (
                        <p className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
                            {currentTour.description}
                        </p>
                    )}
                </div>

                <div className="card p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Select Your Slot</h2>
                        <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500/50 rounded" />
                                <span>Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500/20 border border-red-500/50 rounded" />
                                <span>Booked</span>
                            </div>
                        </div>
                    </div>

                    <SlotGrid
                        slots={slots}
                        selectedSlot={selectedSlot}
                        onSlotSelect={setSelectedSlot}
                    />
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="sticky top-32 card p-8">
                    <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                    {selectedSlot ? (
                        <BookingForm
                            tourId={id}
                            slot={selectedSlot}
                            onSubmit={onBookingSubmit}
                            loading={isSubmitting}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 space-y-4">
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <p>Please select an available slot to proceed with booking.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
