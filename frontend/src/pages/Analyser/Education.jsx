import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import CircularProgress from "../../components/CircularProgress";
import { IoArrowBack } from "react-icons/io5";

export default function Education() {
  // Better data structure that's more database-friendly
  const [educationData] = useState({
    category: "education",
    title: "تحليل الوضع التعليمي",
    description: "إحصائيات الوضع التعليمي في المجتمع",
    totalStudents: 2040,
    lastUpdated: "2024-01-15",
    data: [
      {
        id: "illiterate",
        category: "غير متعلم",
        count: 120,
        percentage: 10,
        unit: "شخص",
        color: "#ef4444",
        description: "الأفراد غير المتعلمين",
      },
      {
        id: "early_childhood",
        category: "طفولة مبكرة",
        count: 240,
        percentage: 20,
        unit: "طفل",
        color: "#f59e0b",
        description: "الأطفال في مرحلة الطفولة المبكرة",
      },
      {
        id: "primary_students",
        category: "طلاب ابتدائي",
        count: 200,
        percentage: 30,
        unit: "طالب",
        color: "#10b981",
        description: "الطلاب في المرحلة الابتدائية",
      },
      {
        id: "middle_students",
        category: "طلاب اعدادي",
        count: 1000,
        percentage: 60,
        unit: "طالب",
        color: "#3b82f6",
        description: "الطلاب في المرحلة الإعدادية",
      },
      {
        id: "high_school_students",
        category: "طلاب ثانوي",
        count: 160,
        percentage: 15,
        unit: "طالب",
        color: "#8b5cf6",
        description: "الطلاب في المرحلة الثانوية",
      },
      {
        id: "university_students",
        category: "طلاب جامعيين",
        count: 160,
        percentage: 15,
        unit: "طالب",
        color: "#ec4899",
        description: "الطلاب في المرحلة الجامعية",
      },
      {
        id: "graduate_students",
        category: "دراسات عليا",
        count: 160,
        percentage: 15,
        unit: "طالب",
        color: "#06b6d4",
        description: "الطلاب في الدراسات العليا",
      },
    ],
  });

  // Calculate summary statistics
  const totalCount = educationData.data.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const averagePercentage = Math.round(
    educationData.data.reduce((sum, item) => sum + item.percentage, 0) /
      educationData.data.length
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-6">
      <DashboardHeader />

      {/* Back Button */}
      <div className="flex items-center mb-6">
        <Link
          to="/analyser"
          className="text-2xl text-gray-700 hover:text-black transition"
        >
          <IoArrowBack />
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#1A1F33] mb-12 tracking-wide text-center">
        {educationData.title}
      </h2>

      {/* Analyzer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-8 w-full max-w-7xl mx-auto">
        {educationData.data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CircularProgress
              percentage={item.percentage}
              label={item.category}
              value={item.count}
              unit={item.unit}
              primaryColor={item.color}
              size={120}
              strokeWidth={8}
            />
            <div className="mt-6 text-center">
              <div className="text-lg font-semibold text-[#1A1F33]">
                {item.category}
              </div>
              <div className="text-3xl font-bold text-[#1A1F33] mt-2">
                {item.count.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ({item.percentage}%)
              </div>
              <div className="text-xs text-gray-400 mt-2">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="mt-12 w-full max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#1A1F33] mb-6 text-center">
            تحليل الوضع التعليمي
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {totalCount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">إجمالي الطلاب</div>
              <div className="text-xs text-blue-600 mt-1">
                في النظام التعليمي
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {educationData.data.find((item) =>
                  item.category.includes("جامعية")
                )?.count || 0}
              </div>
              <div className="text-sm text-gray-600">طلاب جامعيين</div>
              <div className="text-xs text-green-600 mt-1">
                مستوى تعليمي عالي
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-[#1A1F33]">
                {educationData.data.find((item) =>
                  item.category.includes("غير متعلمين")
                )?.count || 0}
              </div>
              <div className="text-sm text-gray-600">غير متعلمين</div>
              <div className="text-xs text-purple-600 mt-1">
                يحتاجون برامج محو الأمية
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-sm font-bold text-[#1A1F33]">
                {educationData.lastUpdated}
              </div>
              <div className="text-sm text-gray-600">آخر تحديث</div>
              <div className="text-xs text-orange-600 mt-1">
                بيانات تعليمية محدثة
              </div>
            </div>
          </div>

          {/* Additional Insights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#1A1F33] mb-2">
                📚 توزيع المستويات التعليمية
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  •{" "}
                  {educationData.data.find((item) =>
                    item.category.includes("ابتدائية")
                  )?.count || 0}{" "}
                  طالب ابتدائي
                </li>
                <li>
                  •{" "}
                  {educationData.data.find((item) =>
                    item.category.includes("إعدادية")
                  )?.count || 0}{" "}
                  طالب إعدادي
                </li>
                <li>
                  •{" "}
                  {educationData.data.find((item) =>
                    item.category.includes("ثانوية")
                  )?.count || 0}{" "}
                  طالب ثانوي
                </li>
                <li>
                  •{" "}
                  {educationData.data.find((item) =>
                    item.category.includes("جامعية")
                  )?.count || 0}{" "}
                  طالب جامعي
                </li>
                <li>
                  •{" "}
                  {educationData.data.find((item) =>
                    item.category.includes("دراسات عليا")
                  )?.count || 0}{" "}
                  طالب دراسات عليا
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-[#1A1F33] mb-2">
                🎓 خطط تطوير التعليم
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• برامج محو الأمية للكبار</li>
                <li>• تحسين جودة التعليم الأساسي</li>
                <li>• زيادة المنح الدراسية</li>
                <li>• تطوير البنية التحتية التعليمية</li>
                <li>• برامج تدريب المعلمين</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
