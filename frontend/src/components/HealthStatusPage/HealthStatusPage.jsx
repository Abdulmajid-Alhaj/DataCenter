import React, { useState } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import NavigationButtons from "../../components/NavigationButtons";
import TextareaField from "../../components/TextareaField";

export default function HealthStatusPage() {
    const [healthConditions, setHealthConditions] = useState([]);
    const [explanation, setExplanation] = useState("");

    const options = [
        "مرض مزمن",
        "مرض مستعصي",
        "رعاية كبار سن",
        "ذوي احتياجات خاصة"
    ];

    const toggleCondition = (condition) => {
        setHealthConditions((prev) =>
            prev.includes(condition)
                ? prev.filter((c) => c !== condition)
                : [...prev, condition]
        );
    };

    return (
        <div className="flex bg-gray-50 p-6 space-x-6 rtl:space-x-reverse">
            <div className="flex flex-col flex-1 bg-white rounded-xl shadow-md p-10">
                <h2 className="text-2xl font-semibold text-center mb-10">
                    الحالة الصحية
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {options.map((option) => (
                        <OptionSelectorButton
                            key={option}
                            label={option}
                            selected={healthConditions.includes(option)}
                            onClick={() => toggleCondition(option)}
                        />
                    ))}
                </div>

                <div className="mb-10">
                    <div className="flex justify-self-center w-full max-w-md ">
                        <TextareaField
                            placeholder="الشرح"
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value)}
                            className="w-100"
                        />
                    </div>
                </div>


                <div className="mt-auto flex justify-center">
                    <NavigationButtons
                        onPrevious={() => console.log("السابق")}
                        onNext={() => console.log("التالي")}
                    />
                </div>
            </div>
            <SidebarNavigation
                initialPerson={{ name: "", gender: "", relationship: "", birthDate: "" }}
                onPeopleChange={(people, index) =>
                    console.log("People updated:", people, "Current:", index)
                }
            />
        </div>
    );
}
