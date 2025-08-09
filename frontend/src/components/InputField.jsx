import React from "react";
export default function InputField({ placeholder, value, onChange, icon, type = "text" }) {
    return (
        <div className="relative">
            <div className="flex items-center w-full p-3 rounded-lg border-2 border-gray-200 bg-white transition-all focus-within:border-[#A2FCE7] focus-within:shadow-md">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-white text-right outline-none text-gray-700 placeholder-gray-400"
                    dir="rtl"
                />
                <span className="ml-2 text-gray-400">{icon}</span>
            </div>
        </div>
    );
}
