import React from 'react';
import { FaUser, FaHeart, FaRegSadTear, FaUserSlash } from 'react-icons/fa';

const statusOptions = [
    { label: "أعزب / عزباء", icon: <FaUser className="text-lg" /> },
    { label: "متزوج / متزوجة", icon: <FaHeart className="text-lg text-red-500" /> },
    { label: "أرمل / أرملة", icon: <FaRegSadTear className="text-lg text-gray-500" /> },
    { label: "مطلق / مطلقة", icon: <FaUserSlash className="text-lg text-yellow-500" /> }
];

export default function SocialStatusSelector({ selectedStatus, onChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-11">
            {statusOptions.map(({ label, icon }) => (
                <button
                    key={label}
                    onClick={() => onChange(label)}
                    className={`w-36 md:w-40 p-3 text-center rounded-lg border-2 transition-all duration-200 transform flex flex-col items-center gap-2
                        ${selectedStatus === label
                            ? 'border-[#A2FCE7] bg-[#A2FCE7]/20 text-[#1b4941] shadow-md scale-105'
                            : 'border-[#999999] text-gray-700 hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20 hover:scale-105 hover:shadow-sm'}
                        active:scale-95 active:shadow-inner`}
                >
                    {icon}
                    <span className="text-base font-medium">{label}</span>
                </button>
            ))}
        </div>
    );
}
