import React from 'react';

const SlotItem = ({ slot, isSelected, onClick }) => {
    const getStatusColor = () => {
        if (slot.status === 'booked') return 'bg-red-500/20 text-red-500 border-red-500/50 cursor-not-allowed';
        if (slot.status === 'blocked') return 'bg-gray-500/20 text-gray-500 border-gray-500/40 cursor-not-allowed';
        if (isSelected) return 'bg-indigo-600 text-white border-indigo-400 scale-110 shadow-lg shadow-indigo-500/50 z-10';
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/20 hover:scale-105';
    };

    const isDisabled = slot.status !== 'available';

    return (
        <button
            onClick={() => !isDisabled && onClick(slot)}
            disabled={isDisabled}
            className={`
        w-full h-12 flex items-center justify-center rounded-lg border 
        font-semibold transition-all duration-300 relative
        ${getStatusColor()}
      `}
            title={slot.status.toUpperCase()}
        >
            {slot.number}
            {slot.status === 'booked' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900" />
            )}
        </button>
    );
};

export default SlotItem;
