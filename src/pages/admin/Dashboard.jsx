import React from 'react';
import { LayoutDashboard, Users, Map, Settings, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Bookings', value: '1,284', icon: <LayoutDashboard className="w-6 h-6" />, color: 'bg-blue-500/20 text-blue-400' },
        { label: 'Active Guides', value: '12', icon: <Users className="w-6 h-6" />, color: 'bg-green-500/20 text-green-400' },
        { label: 'Total Trips', value: '45', icon: <Map className="w-6 h-6" />, color: 'bg-purple-500/20 text-purple-400' },
        { label: 'Revenue', value: '$45,200', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-orange-500/20 text-orange-400' },
    ];

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-slate-400 mt-2">Welcome back, Admin. Overview of the system performance.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                        <div className={`p-4 rounded-xl ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="glass p-6 rounded-2xl border border-white/10 min-h-[300px] flex items-center justify-center text-slate-500 italic">
                    [Placeholder for Bookings Chart]
                </div>
                <div className="glass p-6 rounded-2xl border border-white/10 min-h-[300px] flex items-center justify-center text-slate-500 italic">
                    [Placeholder for User Growth Chart]
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
