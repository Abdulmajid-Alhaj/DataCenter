import React, { useState } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import InputField from "../../components/InputField";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import ChildrenQuestionSelector from "../../components/ChildrenQuestionSelector";
import NavigationButtons from "../../components/NavigationButtons";
import SelectField from "../../components/SelectField";

export default function AdditionalHousingInfo() {
    const [hostType, setHostType] = useState("");
    const [hostName, setHostName] = useState("");
    const [hasAbsence, setHasAbsence] = useState(null);
    const [absenceReason, setAbsenceReason] = useState("");
    const [absenceDate, setAbsenceDate] = useState("");

    const hostOptions = [
        { label: "مضيف" },
        { label: "مستضاف" },
        { label: "امرأة معيلة" },
        { label: "لا شيء مما سبق" }
    ];

    const handlePeopleChange = (people, currentIndex) => {
        console.log("Current People:", people);
        console.log("Current Index:", currentIndex);
    };

    return (
        <div className="flex p-6 bg-gray-50">
            <div className="flex-1 bg-white rounded-xl shadow-md p-10 max-w-4xl mx-auto">
                <h2 className="text-center text-2xl font-semibold mb-10">
                    معلومات إضافية عن السكن
                </h2>

                <div className="mb-6">
                    <p className="mb-4 text-right font-medium">
                        هل أنت مضيف / مستضاف / أسرة (امرأة)؟
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        {hostOptions.map(({ label }) => (
                            <OptionSelectorButton
                                key={label}
                                label={label}
                                selected={hostType === label}
                                onClick={() => setHostType(label)}
                            />
                        ))}
                    </div>
                </div>

                {(hostType === "مستضاف" || hostType === "مضيف") && (
                    <div className="mb-6">
                        <p className="mb-2 text-right font-medium">
                            ما اسم رب الأسرة الذي تستضيفه / الذي أنت ضيف عنده
                        </p>
                        <InputField
                            placeholder="اسم رب الأسرة"
                            value={hostName}
                            onChange={(e) => setHostName(e.target.value)}
                        />
                    </div>
                )}

                <div className="mb-6">
                    <p className="mb-4 text-right font-medium">هل يوجد غياب عن الأسرة؟</p>
                    <ChildrenQuestionSelector
                        selected={hasAbsence}
                        onChange={setHasAbsence}
                    />
                </div>

                {hasAbsence === "نعم" && (
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="flex-1">
                            <InputField
                                placeholder="تاريخ الغياب"
                                type="date"
                                value={absenceDate}
                                onChange={(e) => setAbsenceDate(e.target.value)}
                            />
                        </div>
                        <div className="flex-1">
                            <SelectField
                                placeholder="سبب الغياب"
                                value={absenceReason}
                                onChange={(e) => setAbsenceReason(e.target.value)}
                                options={[
                                    "انفصال",
                                    "هجرة",
                                    "مفقود",
                                    "سجين",
                                    "عمل خارج القطر",
                                    "دراسة خارج القطر",
                                    "وفاة",
                                    "سبب آخر"
                                ]}
                            />
                        </div>
                    </div>
                )}



                <NavigationButtons
                    onPrevious={() => console.log("السابق")}
                    onNext={() => console.log("التالي")}
                />
            </div>
            <SidebarNavigation
                initialPerson={{ name: "", gender: "", relationship: "", birthDate: "" }}
                onPeopleChange={handlePeopleChange}
            />
        </div>
    );
}
