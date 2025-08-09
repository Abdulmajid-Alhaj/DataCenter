import React, { useState } from 'react';
import { FaChild } from 'react-icons/fa';
import NavigationButtons from '../../components/NavigationButtons';

export default function ChildrenCountPage() {
    const [count, setCount] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const options = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleSelect = (value) => {
        setCount(value);
        setShowMenu(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg text-right">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex justify-center items-center gap-2">
                    <FaChild className="text-[#1b4941]" />
                    كم عدد الأولاد؟
                </h2>
                <div className="relative w-40 mx-auto">
                    <div
                        className="flex items-center p-3 border-2 border-[#999999] rounded-xl text-right text-lg text-gray-700 cursor-pointer
                            transition-all duration-200 bg-white hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20"
                        onClick={() => setShowMenu(!showMenu)}
                        dir="rtl"
                    >
                        <span className="flex-1">{count ? count : 'اختر عددًا'}</span>
                        <span className="ml-2 text-gray-500">
                            {showMenu ? '▲' : '▼'}
                        </span>
                    </div>

                    {showMenu && (
                        <ul className="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto border-2 border-[#999999] rounded-xl bg-white shadow-md text-right text-gray-700">
                            {options.map((num) => (
                                <li
                                    key={num}
                                    onClick={() => handleSelect(num)}
                                    className="px-4 py-2 cursor-pointer hover:bg-[#A2FCE7]/20 hover:text-[#1b4941] transition"
                                >
                                    {num}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <NavigationButtons />
            </div>
        </div>
    );
}
