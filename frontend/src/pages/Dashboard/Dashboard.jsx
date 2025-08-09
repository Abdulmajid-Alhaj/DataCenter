import React from "react";
import Header from "../../components/Header";
import SidebarDashboard from "../../components/SidebarDashboard";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-[#E0E5EB]">
            <div className="flex-1 p-8">
                <Header />
                <div className="flex justify-center items-center h-full">
                    <div className="bg-[#F5F5F5] w-32 h-32 rounded-full flex items-center justify-center">
                        Logo
                    </div>
                </div>
            </div>
            <SidebarDashboard />
        </div>
    );
}
