import React, { useState } from "react";
import InputField from "../../components/InputField";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import NavigationButtons from "../../components/NavigationButtons";
import SidebarNavigation from "../../components/SidebarNavigation";
import SelectField from "../../components/SelectField";
import ChildrenQuestionSelector from "../../components/ChildrenQuestionSelector"; // ✅

export default function HousingInfoPage() {
    const [people, setPeople] = useState([{}]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [formData, setFormData] = useState({
        region: "",
        address: "",
        houseOwnership: "",
        houseOwnershipOther: "",
        hasCar: null,
        carOwnership: ""
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNavigate = (index) => setCurrentIndex(index);

    const handleAddPerson = () => {
        if (people.length < 10) setPeople([...people, {}]);
    };

    const houseOwnershipOptions = ["غير ذلك", "استلام من العمل", "رهن", "إيجار", "ملك"];

    return (
        <div className="flex min-h-screen p-6 bg-gray-100">
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center mb-6">المسكن</h2>

                <div className="grid grid-cols-2 gap-6">
                    <InputField
                        placeholder="العنوان التفصيلي"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                    />
                    <SelectField
                        placeholder="منطقة السكن"
                        value={formData.region}
                        onChange={(e) => handleChange("region", e.target.value)}
                        options={[
                            "التضامن", "الدويلعة", "دمر", "مساكن برزة", "ركن الدين",
                            "صحنايا والأشرفية", "المزة 86", "المزة", "معضمية", "جديدة",
                            "دمشق المركز", "الكسوة", "السويداء", "درعا", "جرمانا",
                            "قدسيا", "عدرا", "القطيفة", "قطنا", "ضاحية الأسد",
                            "قرحتا", "جمرايا", "الغوطة الشرقية", "الغوطة الغربية",
                            "القلمون", "زائر", "غير  محدد"
                        ]}
                    />
                </div>

                <div className="mt-8 text-center">
                    <p className="mb-8 font-medium">ملكية المنزل</p>
                    <div className="flex justify-center flex-wrap gap-4">
                        {houseOwnershipOptions.map(option => (
                            <OptionSelectorButton
                                key={option}
                                label={option}
                                selected={formData.houseOwnership === option}
                                onClick={() =>
                                    handleChange(
                                        "houseOwnership",
                                        formData.houseOwnership === option ? "" : option
                                    )
                                }
                            />
                        ))}
                    </div>

                    {formData.houseOwnership === "غير ذلك" && (
                        <div className="w-[260px] mx-auto mt-4">
                            <InputField
                                placeholder="يرجى التوضيح"
                                value={formData.houseOwnershipOther}
                                onChange={(e) => handleChange("houseOwnershipOther", e.target.value)}
                            />
                        </div>
                    )}
                </div>

                <div className="mt-10 text-center">
                    <p className="mb-8 font-medium">هل تملك سيارة؟</p>
                    <ChildrenQuestionSelector
                        selected={formData.hasCar === true ? "نعم" : formData.hasCar === false ? "لا" : null}
                        onChange={(value) => {
                            if (value === formData.hasCar) {
                                handleChange("hasCar", null); // إلغاء التحديد
                            } else {
                                handleChange("hasCar", value === "نعم");
                            }
                        }}
                    />
                </div>

                {formData.hasCar && (
                    <div className="mt-8 text-center">
                        <p className="mb-8 font-medium">ملكية السيارة إن وجدت</p>
                        <div className="flex justify-center flex-wrap gap-4">
                            {["ملك", "إيجار/استلام"].map(option => (
                                <OptionSelectorButton
                                    key={option}
                                    label={option}
                                    selected={formData.carOwnership === option}
                                    onClick={() =>
                                        handleChange(
                                            "carOwnership",
                                            formData.carOwnership === option ? "" : option
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* ✅ الأزرار في نهاية صندوق المحتوى */}
                <div className="mt-10">
                    <NavigationButtons
                        onPrevious={() => console.log("السابق")}
                        onNext={() => console.log("التالي")}
                    />
                </div>
            </div>

            <SidebarNavigation
                people={people}
                currentIndex={currentIndex}
                onNavigate={handleNavigate}
                onAdd={handleAddPerson}
            />
        </div>
    );
}
