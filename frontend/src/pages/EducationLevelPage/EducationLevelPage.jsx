import React, { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineSchool, MdOutlineWorkspacePremium } from "react-icons/md";
import { PiBabyBold } from "react-icons/pi";
import NavigationButtons from "../../components/NavigationButtons";
import InputField from "../../components/InputField";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import SidebarNavigationPanel from "../../components/SidebarNavigation";

export default function EducationLevelPage() {
    const [people, setPeople] = useState([
        { level: "", lastCertificate: "" }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLevelChange = (level) => {
        const updated = [...people];
        updated[currentIndex].level = level;
        setPeople(updated);
    };

    const handleCertificateChange = (e) => {
        const updated = [...people];
        updated[currentIndex].lastCertificate = e.target.value;
        setPeople(updated);
    };

    const levelOptions = [
        {
            label: "طفل تحت سن 6 سنوات",
            icon: <PiBabyBold className="text-3xl text-indigo-500" />
        },
        {
            label: "طالب مدرسة",
            icon: <HiOutlineAcademicCap className="text-3xl text-yellow-500" />
        },
        {
            label: "طالب جامعة",
            icon: <MdOutlineSchool className="text-3xl text-blue-500" />
        },
        {
            label: "طالب دراسات عليا",
            icon: <MdOutlineWorkspacePremium className="text-3xl text-purple-500" />
        }
    ];


    return (
        <div className="flex min-h-screen p-6 bg-gray-100">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center mb-8">مستوى الدراسة</h2>

                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    {levelOptions.map(({ label, icon }) => (
                        <OptionSelectorButton
                            key={label}
                            label={label}
                            icon={icon}
                            selected={people[currentIndex]?.level === label}
                            onClick={() =>
                                handleLevelChange(people[currentIndex].level === label ? "" : label)
                            }
                        />
                    ))}

                </div>

                <div className="text-center mb-4 font-medium">
                    ما هي اخر شهادة دراسية حصلت عليها
                </div>
                <div className="max-w-sm mx-auto">
                    <InputField
                        placeholder="الشهادة الدراسية"
                        value={people[currentIndex]?.lastCertificate || ""}
                        onChange={handleCertificateChange}
                    />
                </div>

                <NavigationButtons
                    onPrevious={() => console.log("السابق")}
                    onNext={() => console.log("التالي")}
                />
            </div>

            <SidebarNavigationPanel
                initialPerson={{ level: "", lastCertificate: "" }}
                onPeopleChange={(newPeople, index) => {
                    setPeople(newPeople);
                    setCurrentIndex(index);
                }}
            />
        </div>
    );
}
