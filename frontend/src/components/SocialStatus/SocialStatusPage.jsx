import React, { useState } from 'react';
import SocialStatusSelector from '../../components/SocialStatusSelector';

export default function SocialStatusPage() {
    const [selectedStatus, setSelectedStatus] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 text-center pb-10">
                    الحالة الاجتماعية
                </h2>

                <SocialStatusSelector
                    selectedStatus={selectedStatus}
                    onChange={setSelectedStatus}
                />
            </div>
        </div>
    );
}
