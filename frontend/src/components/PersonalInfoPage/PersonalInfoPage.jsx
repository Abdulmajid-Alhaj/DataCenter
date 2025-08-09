import React, { useState } from "react";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import NavigationButtons from "../../components/NavigationButtons";
import SidebarNavigation from "../../components/SidebarNavigation";

import { toast } from "react-toastify";
import { FaPhone, FaUsers, FaMobileAlt, FaOrcid, FaRegAddressCard, FaRegIdCard, FaMale, FaFemale, FaUserTie } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const initialPerson = {
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    nationalId: "",
    birthDate: "",
    relation: "",
    phone: "",
    mobile: ""
};

export default function PersonalInfoPage() {
    const [people, setPeople] = useState([{ ...initialPerson }]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (field, value) => {
        const updated = [...people];
        updated[currentIndex][field] = value;
        setPeople(updated);
    };

    const handleAddPerson = () => {
        if (people.length >= 10) {
            toast.error("لا يمكن إضافة أكثر من 10 أفراد.");
            return;
        }
        setPeople([...people, { ...initialPerson }]);
        setCurrentIndex(people.length);
    };

    const handleNavigation = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex min-h-screen p-6 bg-gray-100">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center mb-6">المعلومات الشخصية</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <InputField placeholder="الكنية" value={people[currentIndex].lastName} onChange={e => handleChange("lastName", e.target.value)} icon={<FaRegAddressCard />} />
                    <InputField placeholder="الاسم الأول" value={people[currentIndex].firstName} onChange={e => handleChange("firstName", e.target.value)} icon={<FaRegIdCard />} />
                    <InputField placeholder="اسم الأم" value={people[currentIndex].motherName} onChange={e => handleChange("motherName", e.target.value)} icon={<FaFemale />} />
                    <InputField placeholder="اسم الأب" value={people[currentIndex].fatherName} onChange={e => handleChange("fatherName", e.target.value)} icon={<FaUserTie />} />

                    <SelectField
                        value={people[currentIndex].gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        options={["ذكر", "أنثى", "اخر"]}
                        placeholder="اختر الجنس"
                        icon={people[currentIndex].gender === "أنثى" ? <FaFemale /> : <FaMale />}
                    />

                    <InputField placeholder="الرقم الوطني" value={people[currentIndex].nationalId} onChange={e => handleChange("nationalId", e.target.value)} icon={<FaOrcid />} />

                    <InputField
                        placeholder="تاريخ الميلاد"
                        type="date"
                        value={people[currentIndex].birthDate}
                        onChange={e => handleChange("birthDate", e.target.value)}
                        icon={<MdDateRange />}
                    />

                    <SelectField
                        value={people[currentIndex].relation}
                        onChange={(e) => handleChange("relation", e.target.value)}
                        options={["زوج", "زوجة", "ابن", "ابنة", "اخ", "اخت", "قريب", "شريك سكن"]}
                        placeholder="صفة القرابة"
                        icon={<FaUsers />}
                    />

                    <InputField placeholder="رقم الهاتف" value={people[currentIndex].phone} onChange={e => handleChange("phone", e.target.value)} icon={<FaPhone />} />
                    <InputField placeholder="رقم الموبايل" value={people[currentIndex].mobile} onChange={e => handleChange("mobile", e.target.value)} icon={<FaMobileAlt />} />
                </div>
                <NavigationButtons
                    onPrevious={() => console.log("السابق")}
                    onNext={() => console.log("التالي")}
                />
            </div>

            <SidebarNavigation
                people={people}
                currentIndex={currentIndex}
                onNavigate={handleNavigation}
                onAdd={handleAddPerson}
            />

        </div>
    );
}
