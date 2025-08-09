import React from 'react';

export default function OptionSelectorButton({ label, icon, selected, onClick, className = '' }) {
    return (
        <button
            onClick={onClick}
            className={`w-32 py-3 text-center rounded-lg border-2 transition-all duration-200 transform flex flex-col items-center gap-2 text-sm font-medium
                ${selected
                    ? 'border-[#A2FCE7] bg-[#A2FCE7]/20 text-[#1b4941] shadow-md scale-105'
                    : 'border-[#999999] text-gray-700 hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20 hover:scale-105 hover:shadow-sm'}
                active:scale-95 active:shadow-inner ${className}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
