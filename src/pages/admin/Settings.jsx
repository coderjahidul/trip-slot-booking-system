import React from 'react';
import { Settings, Globe, HardDrive, Bell, ShieldCheck } from 'lucide-react';

const AdminSettings = () => {
    const tabs = [
        { name: 'General', icon: <Globe className="w-5 h-5" /> },
        { name: 'Appearance', icon: <Settings className="w-5 h-5" /> },
        { name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
        { name: 'Security', icon: <ShieldCheck className="w-5 h-5" /> },
        { name: 'System', icon: <HardDrive className="w-5 h-5" /> },
    ];

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold">System Settings</h1>
                <p className="text-slate-400 mt-2">Adjust core system configurations and preferences.</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs Sidebar */}
                <div className="lg:w-64 flex flex-col gap-2">
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab.name}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${idx === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {tab.icon}
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex-grow glass p-8 rounded-2xl border border-white/10 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold border-b border-white/5 pb-4">General Configuration</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Site Title</label>
                            <input type="text" defaultValue="Trip Slot Booking System" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500/50 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Support Email</label>
                            <input type="email" defaultValue="support@tgc.com" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500/50 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Default Currency</label>
                            <select className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500/50 outline-none">
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                                <option>BDT (৳)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex justify-end">
                        <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
