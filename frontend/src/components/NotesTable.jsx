import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function NotesTable({ data }) {
    const [selectedNote, setSelectedNote] = useState(null);

    // إظهار التفاصيل عند النقر على الصف (مع استثناء التفاعل مع checkbox)
    const handleRowClick = (e, row) => {
        const isCheckbox = e.target.type === "checkbox";
        if (!isCheckbox) {
            setSelectedNote(row);
        }
    };

    return (
        <>
            <div className="bg-[#F7F7F7] shadow-md rounded-xl max-h-[70vh] overflow-y-auto">
                <table className="w-full text-center rtl table-auto">
                    <thead className="bg-[#CAFFF3] text-[#415A5A] text-sm font-medium sticky top-0 z-10">
                        <tr>
                            <th className="px-4 py-3">رفض الطلب</th>
                            <th className="px-4 py-3">مشرف 2</th>
                            <th className="px-4 py-3">مشرف 1</th>
                            <th className="px-4 py-3">التعديل</th>
                            <th className="px-4 py-3">اسم رب الأسرة</th>
                            <th className="px-4 py-3">رقم العائلة</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-[#415A5A]">
                        {data.map((row, idx) => (
                            <tr
                                key={idx}
                                onClick={(e) => handleRowClick(e, row)}
                                className="border-b hover:bg-[#e6f9f5] transition cursor-pointer"
                            >
                                <td className="px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4 py-2">{row.editType}</td>
                                <td className="px-4 py-2">{row.familyHead}</td>
                                <td className="px-4 py-2">{row.familyId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedNote && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-[#E0E5EB] p-6 rounded-xl w-[90%] max-w-md text-[#415A5A] shadow-lg space-y-5">
                        <h2 className="mb-3 font-bold text-lg text-center">تفاصيل التعديل</h2>
                        <p className="text-end">
                            <span className="font-semibold text-gray-500">التعديل:</span> {selectedNote.editType}
                        </p>
                        <p className="mt-2 text-end">
                            <span className="font-semibold text-gray-500">سبب التعديل:</span> {selectedNote.editReason}
                        </p>

                        <button
                            onClick={() => setSelectedNote(null)}
                            className="mt-6 px-4 py-2 bg-[#CAFFF3] text-[#415A5A] rounded hover:bg-[#b2f0e4] transition"
                        >
                            إغلاق
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}
