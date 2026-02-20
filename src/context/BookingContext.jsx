import React, { createContext, useContext, useState, useCallback } from 'react';
import * as api from '../services/api';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [tours, setTours] = useState([]);
    const [currentTour, setCurrentTour] = useState(null);
    const [slots, setSlots] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTours = useCallback(async () => {
        setLoading(true);
        try {
            const data = await api.getTours();
            setTours(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch tours');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchTourWithSlots = useCallback(async (id) => {
        setLoading(true);
        try {
            const [tourData, slotsData] = await Promise.all([
                api.getTourDetails(id),
                api.getSlots(id)
            ]);
            setCurrentTour(tourData);
            setSlots(slotsData);
            setError(null);
        } catch (err) {
            setError('Failed to fetch tour details');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchBookings = useCallback(async () => {
        setLoading(true);
        try {
            const data = await api.getBookings();
            setBookings(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch bookings');
        } finally {
            setLoading(false);
        }
    }, []);

    const handleBooking = async (tourId, slotId, customerData) => {
        setLoading(true);
        try {
            const result = await api.bookSlot(tourId, slotId, customerData);

            // Update local state
            setSlots(prevSlots =>
                prevSlots.map(s => s.id === slotId ? { ...s, status: 'booked' } : s)
            );

            // Add to bookings history locally
            setBookings(prev => [result.booking, ...prev]);

            return result;
        } catch (err) {
            setError(err.message || 'Booking failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        tours,
        currentTour,
        slots,
        bookings,
        loading,
        error,
        fetchTours,
        fetchTourWithSlots,
        fetchBookings,
        handleBooking,
        setError
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};
