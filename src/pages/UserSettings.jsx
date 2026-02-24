import React, { useState } from 'react';
import UserLayout from '../layouts/UserLayout';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Lock, Eye, EyeOff, Save, Camera } from 'lucide-react';

const UserSettings = () => {
    const { user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const [profileData, setProfileData] = useState({
        name: user?.name || 'Jahidul Islam',
        email: user?.email || 'jahidul@tgc.com',
        phone: user?.phone || '01968-011040',
        avatar: user?.avatar || 'https://avatars.githubusercontent.com/u/79420197?v=4'
    });

    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    return (
        <UserLayout>
            <div className="space-y-10 animate-in fade-in duration-500">
                <header className="border-b border-white/5 pb-6">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Settings</h1>
                    <p className="text-slate-500 mt-2">Manage your account information and preferences</p>
                </header>

                {/* Profile Information Form */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Profile Information</h2>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-8 rounded-2xl">
                        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-8 pb-8 border-b border-white/5">
                            <div className="relative group/avatar">
                                <img
                                    src={profileData.avatar}
                                    className="w-32 h-32 rounded-full border-4 border-indigo-500/20 object-cover"
                                    alt="Avatar Preview"
                                />
                                <label className="absolute inset-0 flex items-center justify-center bg-slate-900/60 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer">
                                    <Camera className="w-8 h-8 text-white" />
                                    <input type="file" className="hidden" accept="image/*" />
                                </label>
                                <div className="absolute bottom-1 right-1 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg group-hover/avatar:scale-110 transition-transform">
                                    <Camera className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Your Profile Picture</h3>
                                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                                    This will be displayed on your dashboard and next to your bookings.
                                    Accepted formats: JPG, PNG, WEBP. Max size: 2MB.
                                </p>
                                <div className="flex gap-3 pt-2">
                                    <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Upload New</button>
                                    <span className="text-slate-700 text-xs">|</span>
                                    <button className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors">Remove Photo</button>
                                </div>
                            </div>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 block">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleProfileChange}
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 block">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleProfileChange}
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-400 cursor-not-allowed"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 block">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profileData.phone}
                                        onChange={handleProfileChange}
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 flex justify-end pt-4">
                                <button type="button" className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl font-bold">
                                    <Save className="w-5 h-5" />
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Password Update Section */}
                <section className="space-y-6 pt-10 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <Lock className="w-5 h-5 text-red-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Update Password</h2>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-8 rounded-2xl">
                        <form className="space-y-6 max-w-xl">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 block">Current Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="oldPassword"
                                        value={passwordData.oldPassword}
                                        onChange={handlePasswordChange}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 block">New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordChange}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 block">Confirm New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordChange}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-800/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button type="button" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all border border-white/10">
                                    Change Password
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </UserLayout>
    );
};

export default UserSettings;
