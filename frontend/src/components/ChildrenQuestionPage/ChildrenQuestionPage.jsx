import React, { useState } from 'react';
import ChildrenQuestionSelector from '../../components/ChildrenQuestionSelector';

export default function ChildrenQuestionPage() {
    const [selected, setSelected] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-6 text-center py-6">
                    هل لديك أولاد؟
                </h2>

                <ChildrenQuestionSelector selected={selected} onChange={setSelected} />
            </div>
        </div>
    );
}
