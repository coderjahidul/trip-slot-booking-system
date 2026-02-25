import React, { useState } from 'react';
import { Search, UserPlus, MoreHorizontal, Mail, Phone, Calendar, Edit2, Trash2, X, Shield, Key, Eye, EyeOff } from 'lucide-react';

const AdminUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const [users, setUsers] = useState([
        { id: 1, name: 'Admin User', email: 'admin@tgc.com', role: 'admin', status: 'active', joined: '2023-10-01' },
        { id: 2, name: 'Guide John', email: 'guide@tgc.com', role: 'guide', status: 'active', joined: '2023-11-15' },
        { id: 3, name: 'Tourist Sam', email: 'sam@gmail.com', role: 'user', status: 'active', joined: '2024-01-10' },
        { id: 4, name: 'Guide Sarah', email: 'sarah@tgc.com', role: 'guide', status: 'pending', joined: '2024-02-01' },
        { id: 5, name: 'Standard User', email: 'user@example.com', role: 'user', status: 'inactive', joined: '2023-12-20' },
    ]);

    const openModal = (user = null) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
        setShowPassword(false);
    };

    const getRoleBadge = (role) => {
        const styles = {
            admin: 'bg-red-500/10 text-red-400 border-red-500/20',
            guide: 'bg-green-500/10 text-green-400 border-green-500/20',
            user: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        };
        return (
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${styles[role] || styles.user}`}>
                {role}
            </span>
        );
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Users</h1>
                    <p className="text-slate-400 mt-2">View and manage all system users and their roles.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
                >
                    <UserPlus className="w-5 h-5" />
                    New User Account
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="relative flex-grow w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by name, email or role..."
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                </div>
                <div className="flex gap-2 shrink-0">
                    <select className="bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none transition-all">
                        <option>Role: All</option>
                        <option>Admin</option>
                        <option>Guide</option>
                        <option>User</option>
                    </select>
                    <select className="bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none transition-all">
                        <option>Status: All</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>

            <div className="glass rounded-2xl border border-white/10 overflow-hidden group">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-white/5">
                                <th className="px-6 py-4">User Details</th>
                                <th className="px-6 py-4">Role / Permission</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Joined At</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group/row">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-lg">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-white leading-none">{user.name}</p>
                                                <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                                                    <Mail className="w-3 h-3" /> {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : user.status === 'pending' ? 'bg-orange-500' : 'bg-slate-500'}`} />
                                            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-medium text-slate-400">{user.joined}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => openModal(user)}
                                                className="p-1.5 hover:bg-indigo-500/10 text-indigo-400 rounded-lg transition-all"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-red-500/10 text-red-400 rounded-lg transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-slate-900 w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
                        {/* Modal Header */}
                        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
                                    <UserPlus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{editingUser ? 'Edit User Context' : 'Register New User'}</h2>
                                    <p className="text-sm text-slate-400">Configure account identity and permissions</p>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Identity</label>
                                    <input
                                        type="text"
                                        defaultValue={editingUser?.name}
                                        placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Terminal</label>
                                    <input
                                        type="email"
                                        defaultValue={editingUser?.email}
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Security Key</label>
                                    <div className="relative">
                                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={editingUser ? '••••••••' : 'Enter password'}
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {editingUser && <p className="text-[10px] text-slate-500 ml-1">Leave blank to keep current password</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Role Allocation</label>
                                    <div className="relative">
                                        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <select
                                            defaultValue={editingUser?.role || 'user'}
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none"
                                        >
                                            <option value="user">Standard User</option>
                                            <option value="guide">Tour Guide</option>
                                            <option value="admin">Administrator</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Operational Status</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['active', 'pending', 'inactive'].map((status) => (
                                        <button
                                            key={status}
                                            type="button"
                                            className={`
                                                flex flex-col items-center justify-center p-3 rounded-xl border transition-all
                                                ${(editingUser?.status || 'active') === status
                                                    ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400'
                                                    : 'bg-slate-950 border-white/10 text-slate-500 hover:border-white/20'}
                                            `}
                                        >
                                            <span className="text-[11px] font-black uppercase tracking-widest">{status}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>

                        {/* Modal Footer */}
                        <div className="px-8 py-6 border-t border-white/5 flex justify-end gap-3 bg-white/5">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
                                {editingUser ? 'Sync Account' : 'Initialize Account'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
