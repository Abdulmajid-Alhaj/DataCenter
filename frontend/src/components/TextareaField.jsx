import React from "react";

export default function TextareaField({ placeholder, value, onChange , className = '' }) {
    return (
        <textarea
            className={`px-4 py-2 shadow-sm rounded-lg outline-0 border-2 border-gray-200 bg-white transition-all focus:border-[#A2FCE7] focus-within:shadow-md text-right ${className}`}
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
