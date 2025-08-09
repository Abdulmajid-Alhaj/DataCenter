import React, { useState } from "react";
import Header from "../../components/Header";
import SidebarDashboard from "../../components/SidebarDashboard";
import SearchBar from "../../components/SearchBar";
import UserTable from "../../components/UserTable";
import { useNavigate } from "react-router-dom";

const mockData = [
    { evaluation: "التقييم", lastUpdated: "2024-01-01", familyHead: "عبد المجيد الحاج", familyId: "DAM-1" },
    { evaluation: "التقييم", lastUpdated: "2024-01-02", familyHead: "انور", familyId: "DAM-2" },
    { evaluation: "التقييم", lastUpdated: "2024-01-03", familyHead: "احمد", familyId: "DAM-3" },
    { evaluation: "التقييم", lastUpdated: "2024-01-04", familyHead: "رهف", familyId: "DAM-4" },
    { evaluation: "التقييم", lastUpdated: "2024-01-05", familyHead: "علي", familyId: "DAM-5" },
    { evaluation: "التقييم", lastUpdated: "2024-01-06", familyHead: "ليث", familyId: "DAM-6" },
    { evaluation: "التقييم", lastUpdated: "2024-01-07", familyHead: "سناء", familyId: "DAM-7" },
    { evaluation: "التقييم", lastUpdated: "2024-01-08", familyHead: "دعاء", familyId: "DAM-8" },
    { evaluation: "التقييم", lastUpdated: "2024-01-09", familyHead: "اسم رب الأسرة", familyId: "DAM-9" },
    { evaluation: "التقييم", lastUpdated: "2024-01-10", familyHead: "اسم رب الأسرة", familyId: "DAM-11" },
    { evaluation: "التقييم", lastUpdated: "2024-01-10", familyHead: "اسم رب الأسرة", familyId: "DAM-12" },
    { evaluation: "التقييم", lastUpdated: "2024-01-10", familyHead: "اسم رب الأسرة", familyId: "DAM-13" },
    { evaluation: "التقييم", lastUpdated: "2024-01-10", familyHead: "اسم رب الأسرة", familyId: "DAM-14" },
];

export default function UserManagementPage() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/familyMemberInfo')
    }

    const filteredData = mockData.filter((item) =>
        item.familyId.includes(search) || item.familyHead.includes(search)
    );

    return (
        <div className="flex min-h-screen bg-[#E0E5EB] rtl">

            <main className="flex-1 px-8 pt-6 flex flex-col">
                <Header />

                <div className="flex justify-end mb-6 space-x-2 items-center">
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="text-[#415A5A] text-lg font-medium text-right mb-2">: بحث</div>
                </div>

                <UserTable data={filteredData} onClick={onClick}/>
            </main>

            <SidebarDashboard />
        </div>
    );
}
