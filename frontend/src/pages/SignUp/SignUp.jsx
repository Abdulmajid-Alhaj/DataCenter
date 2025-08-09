import React from 'react';
import AuthImage from "../../components/AuthImage";
import InputField from '../../components/InputField';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { FaLock, FaPhone, FaUser } from 'react-icons/fa';

export default function SignUp() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signin')
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        navigate('/verify')
    }

    return (
        <div className="min-h-screen flex items-center justify-evenly px-6 bgImage bg-contain bg-no-repeat">
            <div className="flex flex-col md:flex-row items-center gap-50">
                <AuthImage />
                <div className="h-90 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-center text-[#605D5D]">انشاء حساب</h2>
                    </div>
                    <div className='h-70 flex flex-col justify-around'>
                        <InputField placeholder="اسم المستخدم" icon={<FaUser />} type="text" />
                        <InputField placeholder="رقم الموبايل" icon={<FaPhone />} type="text" />
                        <InputField placeholder="كلمة السر" type="password" icon={<FaLock/>} />

                        <div className="text-sm text-gray-500 flex justify-between">
                            <p className="underline cursor-pointer" onClick={handleClick}>تسجيل دخول</p>
                            <p>هل لديك حساب؟ </p>
                        </div>

                        <button className="group relative flex items-center justify-center gap-2 w-72 py-3 rounded-xl font-bold text-[#333] bg-gradient-to-r from-[#59FFDE] to-[#45E5C0] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-[#45E5C0] hover:to-[#2AD3B3] overflow-hidden cursor-pointer" onClick={handleSubmit}>
                            <span className="z-10">ارسال</span>
                            <span className="ml-1 z-10 transition-transform duration-300 group-hover:translate-x-1">➜</span>
                            <span className="absolute inset-0 bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
