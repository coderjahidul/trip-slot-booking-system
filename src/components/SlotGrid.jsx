import React from 'react';
import SlotItem from './SlotItem';

const SlotGrid = ({ slots, selectedSlot, onSlotSelect }) => {
    return (
        <div className="grid grid-cols-5 md:grid-cols-8 gap-3 p-1">
            {slots.map((slot) => (
                <SlotItem
                    key={slot.id}
                    slot={slot}
                    isSelected={selectedSlot?.id === slot.id}
                    onClick={onSlotSelect}
                />
            ))}
        </div>
    );
};

export default SlotGrid;
