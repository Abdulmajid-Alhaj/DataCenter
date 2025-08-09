import React from 'react';

export default function NavigationButtons({
    onPrevious,
    onNext,
    showPrevious = true,
    showNext = true,
    previousLabel = 'السابق',
    nextLabel = 'التالي',
}) {
    return (
        <div className="flex justify-center mt-8 gap-4">
            {showPrevious && (
                <button
                    onClick={onPrevious}
                    className="text-sm text-center py-4 px-16 rounded-lg border-2 border-[#999999] text-gray-700 transition-all duration-200 transform
                        hover:border-[#A2FCE7] hover:bg-[#A2FCE7]/20 hover:scale-105 hover:shadow-sm
                        active:scale-95 active:shadow-inner"
                >
                    {previousLabel}
                </button>
            )}

            {showNext && (
                <button
                    onClick={onNext}
                    className="text-sm text-center py-4 px-16 rounded-lg border-2 transition-all duration-200 transform
                        bg-[#A2FCE7] text-[#1b4941] border-[#A2FCE7] font-medium
                        hover:scale-105 hover:shadow-md
                        active:scale-95 active:shadow-inner"
                >
                    {nextLabel}
                </button>
            )}
        </div>
    );
}
