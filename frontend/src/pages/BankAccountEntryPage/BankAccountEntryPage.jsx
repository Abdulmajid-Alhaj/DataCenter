import React, { useState } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import OptionSelectorButton from "../../components/OptionSelectorButton";
import NavigationButtons from "../../components/NavigationButtons";
import InputField from "../../components/InputField";
import TextareaField from "../../components/TextareaField";
import ChildrenQuestionSelector from "../../components/ChildrenQuestionSelector";

export default function BankAccountEntryPage() {
    const [hasBankAccount, setHasBankAccount] = useState("");
    const [accountType, setAccountType] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [dataEntryName, setDataEntryName] = useState("");
    const [notes, setNotes] = useState("");

    return (
        <div className="flex bg-gray-50 min-h-screen p-6">
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-xl font-bold text-center mb-10">الحساب البنكي ومدخل البيانات</h1>

                <div className="mb-8">
                    <p className="text-center text-md font-medium mb-8">هل تملك حساب بنكي؟</p>
                    <ChildrenQuestionSelector selected={hasBankAccount} onChange={setHasBankAccount} />
                </div>

                {hasBankAccount === "نعم" && (
                    <>
                        <div className="mb-8">
                            <p className="text-center text-md font-medium mb-6">نوع الحساب</p>
                            <div className="flex justify-center gap-5 flex-wrap">
                                {['عقاري', 'تجاري', 'خاص'].map((type) => (
                                    <OptionSelectorButton
                                        key={type}
                                        label={type}
                                        selected={accountType === type}
                                        onClick={() => setAccountType(accountType === type ? "" : type)}
                                    />
                                ))}
                            </div>
                        </div>

                        {accountType === "خاص" && (
                            <div className="mb-8 max-w-lg mx-auto">
                                <InputField
                                    placeholder="اسم البنك إذا كان خاص"
                                    value={bankName}
                                    onChange={(e) => setBankName(e.target.value)}
                                />
                            </div>
                        )}

                        <div className="mb-8 max-w-lg mx-auto">
                            <InputField
                                placeholder="رقم الحساب"
                                value={accountNumber}
                                onChange={(e) => {
                                    const numbersOnly = e.target.value.replace(/\D/g, "");
                                    setAccountNumber(numbersOnly);
                                }}
                                type="text"
                                inputMode="numeric"
                            />
                        </div>
                    </>
                )}
                <div className="mb-8 max-w-lg mx-auto">
                    <p className="text-right font-medium mb-2">مدخل البيانات</p>
                    <InputField
                        placeholder="ما هو اسم مدخل البيانات ؟"
                        value={dataEntryName}
                        onChange={(e) => {
                            const lettersOnly = e.target.value.replace(/[^ء-يa-zA-Z\s]/g, "");
                            setDataEntryName(lettersOnly);
                        }}
                    />
                </div>

                <div className="mb-8 flex justify-center">
                    <div className=" max-w-xl">
                        <p className="text-right font-medium mb-2">الملاحظات</p>
                        <TextareaField
                            placeholder="ملاحظات مدخل البيانات"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-100"
                        />
                    </div>
                </div>

                <NavigationButtons
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Submit")}
                    nextLabel="ارسال"
                />
            </div>

            <SidebarNavigation
                initialPerson={{ name: "" }}
                onPeopleChange={(people, index) => {
                    console.log("Current People:", people);
                    console.log("Current Index:", index);
                }}
            />
        </div>
    );
}
