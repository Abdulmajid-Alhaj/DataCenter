import React, { useState } from "react";
import Header from "../../components/Header";
import SidebarDashboard from "../../components/SidebarDashboard";
import FamilyMemberTable from "../../components/FamilyMemberTable";
import SearchBar from "../../components/SearchBar"; 

export default function FamilyDashboard() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex h-screen bg-[#F7F7F7]">
            <div className="flex-1 flex flex-col p-6 overflow-auto">
                <Header />
                <div className="text-[#415A5A] text-sm flex justify-around">
                    <div className="flex-col text-end w-40">
                        <p> : ملاحظات مدخل البيانات</p>
                        <p>
                            ....................................................
                            ....................................................
                            ....................................................
                        </p>
                    </div>
                    <div className="text-end space-y-2">
                        <p>مدخل البيانات : عبد الحاج</p>
                        <p>تاريخ إدخال البيانات : 2/5/2025</p>
                    </div>
                    <div className="text-end space-y-2">
                        <p>عدد الأفراد : 10</p>
                        <p>عدد الأفراد المنتجين : 6</p>
                    </div>
                </div>
                <div className="flex justify-end mb-6 space-x-2 items-center">
                    <SearchBar value={searchTerm} onChange={handleSearchChange} />
                    <div className="text-[#415A5A] text-lg font-medium text-right mb-2">: بحث</div>
                </div>

                <FamilyMemberTable />
            </div>
            <SidebarDashboard />
        </div>
    );
}
