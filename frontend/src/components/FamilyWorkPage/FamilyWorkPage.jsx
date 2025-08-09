import React, { useState } from "react";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import NavigationButtons from "../../components/NavigationButtons";
import SidebarNavigation from "../../components/SidebarNavigation";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import TextareaField from "../../components/TextareaField";

export default function FamilyWorkPage() {
    const initialPerson = {
        workplace: "",
        workType: "",
        workDesc: "",
        ownership: "",
        otherOwnership: "",
        income: "",
    };

    const [people, setPeople] = useState([{ ...initialPerson }]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [explanation, setExplanation] = useState("");

    const handleChange = (key) => (e) => {
        const updated = [...people];
        updated[currentIndex][key] = e.target.value;
        setPeople(updated);
    };

    const handleSelect = (key, value) => {
        const updated = [...people];
        updated[currentIndex][key] = value;
        setPeople(updated);
    };

    const handlePeopleChange = (newPeople, newIndex) => {
        setPeople(newPeople);
        setCurrentIndex(newIndex);
    };

    const ownershipOptions = ["ملك", "عامل", "إيجار", "شريك", "استثمار"];
    const incomeOptions = [
        "أقل من $50",
        "بين الـ 50-$100",
        "بين الـ 100-$200",
        "أكثر من $200"
    ];

    const workTypeOptions = [
        "لا يعمل",
        "متقاعد",
        "عامل يومي",
        "إلزامية",
        "عقد مؤقت",
        "موظف حكومي",
        "موظف عادي قطاع خاص",
        "متطوع",
        "مزارع",
        "أعمال حرة حرفية",
        "عمل حر شهادات عليا",
        "موظف رفيع قطاع خاص",
        "تاجر",
        "صناعي",
        "موظف منظمات دولية",
        "تحت الرعاية"
    ];

    return (
        <div className="flex min-h-screen p-6 bg-gray-100">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center mb-8">عمل أفراد الأسرة</h2>

                <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mb-6">
                    <InputField
                        placeholder="مكان العمل"
                        value={people[currentIndex].workplace}
                        onChange={handleChange("workplace")}
                    />
                    <SelectField
                        placeholder="فئة العمل"
                        value={people[currentIndex].workType}
                        onChange={handleChange("workType")}
                        options={workTypeOptions}
                    />
                </div>
                <div className="flex justify-center mb-10">
                    <div className="w-full max-w-md">
                        <TextareaField
                            placeholder="شرح مختصر لطبيعة العمل"
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value)}
                            className="w-100"
                        />
                    </div>
                </div>

                <div className="text-center font-medium mb-8">ملكية العمل</div>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {ownershipOptions.map((label) => (
                        <OptionSelectorButton
                            key={label}
                            label={label}
                            selected={people[currentIndex].ownership === label}
                            onClick={() =>
                                handleSelect("ownership", people[currentIndex].ownership === label ? "" : label)
                            }

                        />
                    ))}
                </div>

                <div className="max-w-sm mx-auto mb-6">
                    <InputField
                        placeholder="غير ذلك"
                        value={people[currentIndex].otherOwnership || ""}
                        onChange={handleChange("otherOwnership")}
                    />
                </div>

                <div className="text-center font-medium mb-8">متوسط الدخل الشهري</div>
                <div className="flex flex-wrap justify-center gap-4">
                    {incomeOptions.map((label) => (
                        <OptionSelectorButton
                            key={label}
                            label={label}
                            selected={people[currentIndex].income === label}
                            onClick={() =>
                                handleSelect("income", people[currentIndex].income === label ? "" : label)
                            }

                        />
                    ))}
                </div>

                <NavigationButtons
                    onPrevious={() => console.log("السابق")}
                    onNext={() => console.log("التالي")}
                />
            </div>

            <SidebarNavigation
                initialPerson={initialPerson}
                onPeopleChange={handlePeopleChange}
            />
        </div>
    );
}
