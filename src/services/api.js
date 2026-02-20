import axios from 'axios';

// Mock data for initial development
const tours = [
    {
        id: 1,
        name: 'Nepal Mountain Tour',
        date: '2026-05-10',
        price: 45000,
        availableSlots: 35,
        image: '/images/nepal.png',
        description: 'Experience the breathtaking beauty of the Himalayas. This tour includes guided treks to Everest Base Camp, visits to ancient temples in Kathmandu, and scenic mountain flights. Perfect for adventure seekers and nature lovers.'
    },
    {
        id: 2,
        name: 'Maldives & Sri Lanka',
        date: '2026-06-15',
        price: 85000,
        availableSlots: 12,
        image: '/images/maldives.png',
        description: 'A perfect blend of tropical relaxation and cultural exploration. Enjoy the crystal-clear waters and overwater bungalows in the Maldives, followed by a journey through the tea plantations and historic sites of Sri Lanka.'
    },
    {
        id: 3,
        name: 'Umrah Package',
        date: '2026-07-20',
        price: 165000,
        availableSlots: 40,
        image: '/images/umrah.png',
        description: 'Complete your spiritual journey with our premium Umrah package. We provide high-quality accommodation close to the Haram, professional guidance throughout the pilgrimage, and hassle-free visa processing.'
    },
    {
        id: 4,
        name: 'Day Tour (Sylhet)',
        date: '2026-08-05',
        price: 3500,
        availableSlots: 25,
        image: '/images/sylhet.png',
        description: 'Explore the lush green tea gardens, the majestic Ratargul Swamp Forest, and the beautiful Jaflong. This one-day trip is designed for a quick getaway from the city hustle to the heart of nature.'
    },
];

const slotsData = {};
const bookingsHistory = [];

// Initialize slots for each tour
tours.forEach(tour => {
    slotsData[tour.id] = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        number: i + 1,
        status: Math.random() > 0.8 ? 'booked' : 'available', // Randomly book some slots for demo
    }));
});

export const getTours = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return tours;
};

export const getTourDetails = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return tours.find(t => t.id === parseInt(id));
};

export const getSlots = async (tourId) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return slotsData[tourId] || [];
};

export const bookSlot = async (tourId, slotId, customerData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const tourSlots = slotsData[tourId];
    const slot = tourSlots.find(s => s.id === slotId);

    if (slot.status !== 'available') {
        throw new Error('Slot already booked');
    }

    const tour = tours.find(t => t.id === parseInt(tourId));

    slot.status = 'booked';
    slot.customer = customerData;

    const newBooking = {
        id: Date.now(),
        tourId: parseInt(tourId),
        tourName: tour.name,
        tourDate: tour.date,
        slotNumber: slot.number,
        customer: customerData,
        bookingDate: new Date().toISOString()
    };

    bookingsHistory.unshift(newBooking);

    return { success: true, slot, customer: customerData, booking: newBooking };
};

export const getBookings = async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return bookingsHistory;
};

export const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock user for testing
    if (email && password) {
        return {
            user: { id: 1, name: 'John Doe', email: email },
            token: 'mock-jwt-token'
        };
    }
    throw new Error('Invalid email or password');
};

export const register = async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    return {
        user: { id: Date.now(), ...userData },
        token: 'mock-jwt-token'
    };
};

