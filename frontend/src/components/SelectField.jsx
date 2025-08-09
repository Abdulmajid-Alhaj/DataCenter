import React from "react";
import { twMerge } from "tailwind-merge";

export default function SelectField({ value, onChange, icon , options, placeholder }) {
    return (
        <div className="relative">
            <div className="flex items-center w-full p-3 rounded-lg border-2 border-gray-200 bg-white focus-within:border-[#A2FCE7] transition">
                <select
                    className={twMerge(
                        "w-full bg-white text-right outline-none text-gray-700",
                        !value && "text-gray-400"
                    )}
                    dir="rtl"
                    value={value}
                    onChange={onChange}
                >
                    <option value="">{placeholder}</option>
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <span className="ml-2 text-gray-400">{icon}</span>
            </div>
        </div>
    );
}
