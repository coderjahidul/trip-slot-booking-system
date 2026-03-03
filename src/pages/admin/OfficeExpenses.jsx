import React, { useState, useEffect } from 'react';
import {
    Plus, Search, Filter, Trash2, Edit2, X,
    Banknote, Calendar, Tag, FileText, DollarSign
} from 'lucide-react';

const AdminOfficeExpenses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('tgc_office_expenses');
        if (saved) return JSON.parse(saved);
        return [
            { id: 1, category: 'Office Rent', amount: 1500, date: '2024-03-01', description: 'Monthly rent for main office' },
            { id: 2, category: 'Utilities', amount: 200, date: '2024-03-05', description: 'Electricity and water bills' },
            { id: 3, category: 'Marketing', amount: 500, date: '2024-03-10', description: 'Facebook and Google ads' },
        ];
    });

    useEffect(() => {
        localStorage.setItem('tgc_office_expenses', JSON.stringify(expenses));
    }, [expenses]);

    const openModal = (expense = null) => {
        setEditingExpense(expense);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingExpense(null);
    };

    const handleSaveExpense = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const expenseData = {
            id: editingExpense ? editingExpense.id : Date.now(),
            category: formData.get('category'),
            amount: parseFloat(formData.get('amount')),
            date: formData.get('date'),
            description: formData.get('description'),
        };

        if (editingExpense) {
            setExpenses(expenses.map(exp => exp.id === editingExpense.id ? expenseData : exp));
        } else {
            setExpenses([expenseData, ...expenses]);
        }
        closeModal();
    };

    const handleDeleteExpense = (id) => {
        if (window.confirm('Are you sure you want to delete this expense record?')) {
            setExpenses(expenses.filter(exp => exp.id !== id));
        }
    };

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Office Expenses</h1>
                    <p className="text-slate-400 mt-2">Manage general company costs and utilities.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
                >
                    <Plus className="w-5 h-5" />
                    Record New Expense
                </button>
            </header>

            {/* Stats Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-orange-500/20 text-orange-400">
                        <Banknote className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Total Office Expenditure</p>
                        <h3 className="text-2xl font-bold mt-1">${totalExpenses.toLocaleString()}</h3>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="relative flex-grow w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by description or category..."
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                </div>
                <div className="flex gap-2 shrink-0">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl border border-white/5 text-sm font-medium transition-all">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <select className="bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none transition-all">
                        <option>Category: All</option>
                        <option>Rent</option>
                        <option>Utilities</option>
                        <option>Marketing</option>
                        <option>Salary</option>
                    </select>
                </div>
            </div>

            {/* Expenses List */}
            <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5">
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 text-sm font-medium text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                        {new Date(expense.date).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        {expense.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{expense.description}</td>
                                <td className="px-6 py-4 font-black text-orange-400 text-sm">${expense.amount.toLocaleString()}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                        <button
                                            onClick={() => openModal(expense)}
                                            className="p-1.5 hover:bg-indigo-500/10 text-indigo-400 rounded-lg transition-all"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteExpense(expense.id)}
                                            className="p-1.5 hover:bg-red-500/10 text-red-400 rounded-lg transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {expenses.length === 0 && (
                    <div className="p-20 text-center space-y-4">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-600 mx-auto">
                            <Banknote className="w-8 h-8 opacity-20" />
                        </div>
                        <p className="text-slate-500 italic">No expense records found.</p>
                    </div>
                )}
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-slate-900 w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div>
                                <h2 className="text-2xl font-bold">{editingExpense ? 'Edit Expense' : 'Record Expense'}</h2>
                                <p className="text-sm text-slate-400 mt-1">General office or company cost entry</p>
                            </div>
                            <button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveExpense} className="p-8 space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Category</label>
                                <div className="relative">
                                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <select
                                        name="category"
                                        defaultValue={editingExpense?.category || 'Utilities'}
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none text-sm"
                                    >
                                        <option value="Office Rent">Office Rent</option>
                                        <option value="Utilities">Utilities</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Salary">Salary</option>
                                        <option value="Miscellaneous">Miscellaneous</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Amount ($)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="number"
                                            name="amount"
                                            step="0.01"
                                            defaultValue={editingExpense?.amount}
                                            required
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="date"
                                            name="date"
                                            defaultValue={editingExpense?.date || new Date().toISOString().split('T')[0]}
                                            required
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs text-slate-500 ml-1 uppercase tracking-widest font-bold">Description</label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                                    <textarea
                                        name="description"
                                        rows="3"
                                        defaultValue={editingExpense?.description}
                                        required
                                        placeholder="Record details about this expenditure..."
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all resize-none text-sm"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                                >
                                    {editingExpense ? 'Update Record' : 'Save Expense'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOfficeExpenses;
