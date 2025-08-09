import React from "react";
import { ImSearch  } from "react-icons/im";

export default function SearchBar({ value, onChange }) {
    return (
        <div className="flex items-center gap-2 bg-[#CAFFF3] rounded-full px-4 py-2 w-full max-w-sm">
            <ImSearch  className="text-[#415A5A]" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                dir="rtl"
                className="bg-transparent outline-none text-[#415A5A] w-full text-right placeholder:text-[#415A5A]"
            />
        </div>
    );
}
