import React, { useState } from 'react';
import { Shield, Plus, Edit2, Trash2, X, CheckSquare, Square, Info } from 'lucide-react';

const AdminRoles = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRole, setEditingRole] = useState(null);

    const [roles, setRoles] = useState([
        { id: 1, name: 'Super Admin', permissions: ['all'], count: 1, description: 'Full system access with all capabilities.' },
        { id: 2, name: 'Manager', permissions: ['manage_trips', 'manage_guides', 'manage_bookings', 'view_reports'], count: 3, description: 'Operational oversight and management.' },
        { id: 3, name: 'Guide', permissions: ['view_bookings', 'update_profile', 'manage_schedule'], count: 12, description: 'Limited access for tour guides to manage their trips.' },
        { id: 4, name: 'Customer', permissions: ['book_trips', 'view_history', 'manage_settings'], count: 1240, description: 'Basic permissions for registered tourists.' },
    ]);

    const availablePermissions = [
        { id: 'view_dashboard', label: 'View Dashboard' },
        { id: 'manage_trips', label: 'Manage Trips' },
        { id: 'manage_users', label: 'Manage Users' },
        { id: 'manage_roles', label: 'Manage Roles' },
        { id: 'manage_bookings', label: 'Manage Bookings' },
        { id: 'view_reports', label: 'View Reports' },
        { id: 'system_settings', label: 'System Settings' },
    ];

    const openModal = (role = null) => {
        setEditingRole(role);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingRole(null);
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Roles & Permissions</h1>
                    <p className="text-slate-400 mt-2">Define roles and manage their system permissions.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
                >
                    <Plus className="w-5 h-5" />
                    Define New Role
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {roles.map((role) => (
                    <div key={role.id} className="glass p-6 rounded-3xl border border-white/10 space-y-5 group hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
                                <Shield className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-900 px-2 py-1 rounded-md">{role.count} Users</span>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{role.name}</h3>
                            <p className="text-slate-500 text-xs mt-2 line-clamp-2 min-h-[32px]">{role.description}</p>
                        </div>

                        <div className="flex-grow space-y-2">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                                <Info className="w-3 h-3" /> Core Capabilities
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {role.permissions.slice(0, 3).map(p => (
                                    <span key={p} className="text-[9px] font-bold bg-white/5 text-slate-400 px-2 py-0.5 rounded-md border border-white/5">
                                        {p.replace('_', ' ').toUpperCase()}
                                    </span>
                                ))}
                                {role.permissions.length > 3 && (
                                    <span className="text-[9px] font-bold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-md">
                                        +{role.permissions.length - 3} MORE
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex gap-2">
                            <button
                                onClick={() => openModal(role)}
                                className="flex-grow py-2 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Edit2 className="w-3 h-3" /> Edit Profile
                            </button>
                            <button className="p-2 text-red-500/40 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all border border-red-500/10">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-slate-900 w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{editingRole ? 'Edit System Role' : 'Define New System Role'}</h2>
                                    <p className="text-sm text-slate-400">Manage accessibility and functional permissions</p>
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
                        <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar">
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Role Title</label>
                                    <input
                                        type="text"
                                        defaultValue={editingRole?.name}
                                        placeholder="Ex: Marketing Manager"
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Functional Description</label>
                                    <textarea
                                        rows="3"
                                        defaultValue={editingRole?.description}
                                        placeholder="Describe the responsibilities of this role..."
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    Permission Matrix <span className="text-[10px] font-normal lowercase opacity-50 text-indigo-400">(select all that apply)</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {availablePermissions.map((perm) => (
                                        <button
                                            key={perm.id}
                                            type="button"
                                            className={`
                                                flex items-center gap-3 p-3 rounded-xl border transition-all text-left
                                                ${(editingRole?.permissions.includes(perm.id) || editingRole?.permissions.includes('all'))
                                                    ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-400'
                                                    : 'bg-slate-950 border-white/10 text-slate-500 hover:border-white/20'}
                                            `}
                                        >
                                            {(editingRole?.permissions.includes(perm.id) || editingRole?.permissions.includes('all')) ? <CheckSquare className="w-4 h-4 shrink-0" /> : <Square className="w-4 h-4 shrink-0" />}
                                            <span className="text-sm font-semibold">{perm.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-8 py-6 border-t border-white/5 flex justify-end gap-3 bg-white/5 shrink-0">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
                                {editingRole ? 'Update Definitions' : 'Publish Role'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminRoles;
