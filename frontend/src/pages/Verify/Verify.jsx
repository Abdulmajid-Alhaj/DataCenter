import React, { useState, useEffect } from "react";
import OtpInput from "../../components/OtpInput";
import AuthImage from "../../components/AuthImage";

export default function Verify() {
    const [disabled, setDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const handleClick = () => {
        setDisabled(true);
        setTimeLeft(180);
    };

    useEffect(() => {
        if (timeLeft === 0) {
            setDisabled(false);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="min-h-screen flex items-center justify-evenly px-6 bgImage bg-contain bg-no-repeat">
            <div className="flex flex-col md:flex-row items-center gap-50">
                <AuthImage />
                <div className="h-90 flex flex-col justify-between">
                    <h2 className="text-2xl font-semibold text-center text-[#605D5D]">انشاء حساب</h2>

                    <div className="flex flex-col space-y-3">
                        <label className="text-sm text-[#5E5E5E] flex justify-end">: رمز التأكيد</label>
                        <OtpInput />
                    </div>

                    <button className="group relative flex items-center justify-center gap-2 w-72 py-3 rounded-xl font-bold text-[#333] bg-gradient-to-r from-[#59FFDE] to-[#45E5C0] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-[#45E5C0] hover:to-[#2AD3B3] overflow-hidden cursor-pointer">
                        <span className="z-10">انشاء الحساب</span>
                        <span className="ml-1 z-10 transition-transform duration-300 group-hover:translate-x-1">➜</span>
                        <span className="absolute inset-0 bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></span>
                    </button>



                    <div className="flex justify-center items-center gap-4 text-sm font-medium">
                        <button
                            className={`py-2 px-5 rounded-xl transition-all duration-300 ease-in-out shadow-sm
                                ${disabled
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-[#59FFDE] hover:bg-[#4BE4C5] text-gray-800 hover:text-[#1F1F1F] cursor-pointer"
                                }`}
                            onClick={handleClick}
                            disabled={disabled}
                        >
                            إعادة ارسال الرمز
                        </button>

                        {timeLeft > 0 && (
                            <div className="text-[#2F2F2F] bg-gray-100 px-3 py-1 rounded-lg shadow-inner text-sm tracking-wide">
                                {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
