import React from 'react';
export default function ChildrenQuestionSelector({ selected, onChange }) {
    const options = [
        { label: 'نعم' },
        { label: 'لا' }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-11">
            {options.map(({ label }) => (
                <button
                    key={label}
                    onClick={() => onChange(label)}
                    className={`w-32 py-3 text-center rounded-lg border-2 transition-all duration-200 transform flex flex-col items-center gap-2 text-lg font-medium
                        ${selected === label
                            ? 'border-[#A2FCE7] bg-[#A2FCE7]/20 text-[#1b4941] shadow-md scale-105'
                            : 'border-[#999999] text-gray-700 hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20 hover:scale-105 hover:shadow-sm'}
                        active:scale-95 active:shadow-inner`}
                >
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
}
