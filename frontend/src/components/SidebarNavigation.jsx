import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SidebarNavigation({ initialPerson, onPeopleChange }) {
    const [people, setPeople] = useState([{ ...initialPerson }]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAddPerson = () => {
        if (people.length >= 10) {
            toast.error("لا يمكن إضافة أكثر من 10 أفراد.");
            return;
        }
        const newPeople = [...people, { ...initialPerson }];
        setPeople(newPeople);
        setCurrentIndex(newPeople.length - 1);
        onPeopleChange?.(newPeople, newPeople.length - 1);
    };

    const handleNavigate = (index) => {
        setCurrentIndex(index);
        onPeopleChange?.(people, index);
    };

    return (
        <div className="w-48 ml-6 flex flex-col bg-white rounded-lg shadow-md h-[calc(100vh-3rem)] p-3">
            <div className="flex-1 overflow-y-auto space-y-2">
                {people.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavigate(index)}
                        className={`w-full py-5 text-sm rounded-full font-medium text-center px-3 transition-all ${index === currentIndex ? "bg-gray-300" : "bg-teal-200 hover:bg-teal-300"
                            }`}

                    >
                        {index === 0
                            ? "اسم رب الأسرة"
                            : index === 1
                                ? "اسم الزوجة"
                                : `اسم الابن ${index - 1}`}
                    </button>
                ))}
            </div>
            <button
                onClick={handleAddPerson}
                className="w-full py-5 mt-3 text-sm rounded-full bg-teal-100 hover:bg-teal-200 text-center px-3 font-medium"
            >
                + إضافة فرد
            </button>
        </div>
    );
}
