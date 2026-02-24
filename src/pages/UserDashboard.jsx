import { Link } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import { useAuth } from '../context/AuthContext';
import {
    User,
    Mail,
    Phone,
    Calendar,
    MapPin,
    ChevronRight,
    CheckCircle2,
    Clock,
    AlertCircle
} from 'lucide-react';

const UserDashboard = () => {
    const { user } = useAuth();

    // Dummy data array for user info demonstration as requested
    const userData = [
        { label: 'Full Name', value: user?.name || 'Jahidul Islam', icon: <User className="w-5 h-5 text-indigo-400" /> },
        { label: 'Email Address', value: user?.email || 'jahidul@tgc.com', icon: <Mail className="w-5 h-5 text-indigo-400" /> },
        { label: 'Phone Number', value: user?.phone || '01968-011040', icon: <Phone className="w-5 h-5 text-indigo-400" /> },
        { label: 'Member Since', value: 'February 2024', icon: <Calendar className="w-5 h-5 text-indigo-400" /> },
    ];

    // Dummy data for trips
    const dummyTrips = [
        { id: 1, name: 'Sylhet Adventure', date: '2024-03-15', status: 'Upcoming', price: '৳4,500', icon: <CheckCircle2 className="w-4 h-4 text-green-400" /> },
        { id: 2, name: 'Sajek Valley Tour', date: '2024-02-10', status: 'Completed', price: '৳6,200', icon: <CheckCircle2 className="w-4 h-4 text-green-400" /> },
        { id: 3, name: 'Cox\'s Bazar Escape', date: '2024-01-20', status: 'Completed', price: '৳3,800', icon: <CheckCircle2 className="w-4 h-4 text-green-400" /> },
    ];

    return (
        <UserLayout>
            <div className="space-y-8 animate-in fade-in duration-500">
                <header className="border-b border-white/5 pb-6">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">User Profile</h1>
                    <p className="text-slate-500 mt-2">Manage your personal information and account settings</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userData.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-lg font-semibold text-white">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Recent Trips</h2>
                        <Link to="/my-bookings" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                            View all <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {dummyTrips.map((trip) => (
                            <div key={trip.id} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{trip.name}</h4>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider">{trip.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right hidden sm:block">
                                        <p className="font-bold text-white">{trip.price}</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Total Paid</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 ${trip.status === 'Upcoming' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'
                                        }`}>
                                        {trip.status === 'Upcoming' ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                                        {trip.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;
