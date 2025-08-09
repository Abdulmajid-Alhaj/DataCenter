import React, { useState } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import NavigationButtons from "../../components/NavigationButtons";
import InputField from "../../components/InputField";
import TextareaField from "../../components/TextareaField";
import ChildrenQuestionSelector from "../../components/ChildrenQuestionSelector";

export default function CrisisAndNeedsPage() {
    const [isAffected, setIsAffected] = useState("");
    const [crisisDescription, setCrisisDescription] = useState("");
    const [helpStatement, setHelpStatement] = useState("");
    const [hasOtherNeeds, setHasOtherNeeds] = useState("");
    const [otherNeeds, setOtherNeeds] = useState(["", "", ""]);

    return (
        <div className="flex bg-gray-50 min-h-screen p-6">
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-xl font-bold text-center mb-8">الأزمة والاحتياجات</h1>

                <div className="mb-8">
                    <p className="text-center text-md font-medium mb-8">هل أنت متأثرٌ بأزمة ما؟</p>
                    <ChildrenQuestionSelector selected={isAffected} onChange={setIsAffected} />
                </div>

                {isAffected === "نعم" && (
                    <div className="mb-8 flex justify-center">
                        <TextareaField
                            placeholder="شرح طبيعة التأثر"
                            value={crisisDescription}
                            onChange={(e) => setCrisisDescription(e.target.value)}
                            className="w-100"
                        />
                    </div>
                )}


                <div className="mb-6">
                    <p className="text-center text-md font-medium mb-6">تصريح الحاجة للمساعدة</p>
                    <div className="flex justify-center gap-10 flex-wrap pb-5">
                        <OptionSelectorButton
                            label="أنت بحاجة للمساعدة"
                            selected={helpStatement === "أنت بحاجة للمساعدة"}
                            onClick={() =>
                                setHelpStatement(
                                    helpStatement === "أنت بحاجة للمساعدة" ? "" : "أنت بحاجة للمساعدة"
                                )
                            }
                            className="w-52 h-12"
                        />

                        <OptionSelectorButton
                            label="أنت قادر على تقديم المساعدة"
                            selected={helpStatement === "أنت قادر على تقديم المساعدة"}
                            onClick={() =>
                                setHelpStatement(
                                    helpStatement === "أنت قادر على تقديم المساعدة" ? "" : "أنت قادر على تقديم المساعدة"
                                )
                            }
                            className="w-52 h-12"
                        />

                        <OptionSelectorButton
                            label="لست بحاجة لمساعدة"
                            selected={helpStatement === "لست بحاجة لمساعدة"}
                            onClick={() =>
                                setHelpStatement(
                                    helpStatement === "لست بحاجة لمساعدة" ? "" : "لست بحاجة لمساعدة"
                                )
                            }
                            className="w-52 h-12"
                        />

                    </div>
                </div>


                <div className="mb-8">
                    <p className="text-center text-md font-medium mb-8">هل يوجد احتياجات أخرى؟</p>
                    <ChildrenQuestionSelector selected={hasOtherNeeds} onChange={setHasOtherNeeds} />
                </div>

                {hasOtherNeeds === "نعم" && (
                    <div className="w-full flex justify-center">
                        <div className="space-y-3 w-full max-w-md">
                            {otherNeeds.map((need, idx) => (
                                <InputField
                                    key={idx}
                                    placeholder={`الاحتياج ${idx + 1}`}
                                    value={need}
                                    onChange={(e) => {
                                        const updatedNeeds = [...otherNeeds];
                                        updatedNeeds[idx] = e.target.value;
                                        setOtherNeeds(updatedNeeds);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}


                <NavigationButtons
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                />
            </div>
            <SidebarNavigation
                initialPerson={{ name: "" }}
                onPeopleChange={() => {
                }}
            />
        </div>
    );
}
