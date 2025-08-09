import React from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function UserTable({ data , onClick}) {
    return (
        <div className="bg-[#F7F7F7] shadow-md rounded-xl max-h-[70vh] overflow-y-auto">
            <table className="w-full text-center rtl table-auto">
                <thead className="bg-[#CAFFF3] text-[#415A5A] text-sm font-medium sticky top-0 z-10">
                    <tr>
                        <th className="px-4 py-3">إجراءات</th>
                        <th className="px-4 py-3">التقييم</th>
                        <th className="px-4 py-3">تاريخ آخر تعديل</th>
                        <th className="px-4 py-3">اسم رب الأسرة</th>
                        <th className="px-4 py-3">رقم العائلة</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-[#415A5A]" onClick={onClick}>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-[#e6f9f5] transition cursor-pointer">
                            <td className="px-4 py-2 flex items-center gap-3 justify-center">
                                <button className="text-red-500 hover:text-red-700">
                                    <FiTrash2 size={18} />
                                </button>
                                <button className="text-[#415A5A] hover:text-black">
                                    <FiEdit size={18} />
                                </button>
                            </td>
                            <td className="px-4 py-2">{row.evaluation}</td>
                            <td className="px-4 py-2">{row.lastUpdated}</td>
                            <td className="px-4 py-2">{row.familyHead}</td>
                            <td className="px-4 py-2">{row.familyId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
