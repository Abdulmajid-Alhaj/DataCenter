import React from 'react';
import InputField from "./InputField";

export default function AuthForm() {
    return (
        <div className="h-90 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-semibold text-center text-[#605D5D]">انشاء حساب</h2>
            </div>
            <div className='h-70 flex flex-col justify-around'>
                <InputField placeholder="اسم المستخدم" icon="user" type="text" />
                <InputField placeholder="رقم الموبايل" icon="phone" type="text" />
                <InputField placeholder="كلمة السر" type="password" icon="lock" />

                <div className="text-sm text-gray-500 flex justify-between">
                    <p className="underline cursor-pointer">تسجيل دخول</p>
                    <p>هل لديك حساب؟ </p>
                </div>

                <button className="flex items-center justify-around w-72 bg-[#59FFDE] border-1 border-[#CCC7C7] text-[#5E5E5E] font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition">
                    إرسال
                    <p className="ml-2">➜</p>
                </button>
            </div>
        </div>
    );
}
