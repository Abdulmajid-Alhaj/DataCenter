import React, { useState } from "react";
import SidebarDashboard from "../../components/SidebarDashboard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import NotesTable from "../../components/NotesTable";

const dummyData = [
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
    {
        familyId: "12345",
        familyHead: "اسم رب الأسرة",
        rejected: false,
        editType: "ملكية السيارة",
        editReason: "تغيير ملكية السيارة من ملك الى ايجار"
    },
];



export default function NotesPage() {
    const [search, setSearch] = useState("");


    return (
        <div className="flex h-screen bg-[#F1F5F9]">
            <div className="flex-1 flex flex-col p-6 space-y-6 overflow-hidden">
                <Header />

                <div className="flex justify-end mb-6 space-x-2 items-center">
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="text-[#415A5A] text-lg font-medium text-right mb-2">: بحث</div>
                </div>

                <NotesTable data={dummyData} />
            </div>
            <SidebarDashboard />

        </div>
    );
}
