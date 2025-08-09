import React, { useState } from 'react';
import img from '../assets/image/1_1OUv51_qryY1L3WcQO9w8A.png';

const initialImages = [
    { id: 1, type: 'image', src: img },
    { id: 2, type: 'color', color: '#96FCEF' },
    { id: 3, type: 'color', color: '#000000' },
];

export default function AuthImage() {
    const [blocks, setBlocks] = useState(initialImages);
    const [draggingIndex, setDraggingIndex] = useState(null);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("dragIndex", index);
        setDraggingIndex(index);
    };

    const handleDrop = (e, dropIndex) => {
        const dragIndex = parseInt(e.dataTransfer.getData("dragIndex"));
        if (isNaN(dragIndex)) return;

        const newBlocks = [...blocks];
        const [dragged] = newBlocks.splice(dragIndex, 1);
        newBlocks.splice(dropIndex, 0, dragged);
        setBlocks(newBlocks);
        setDraggingIndex(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnd = () => {
        setDraggingIndex(null);
    };

    return (
        <div className="flex items-center justify-center space-x-0">
            {blocks.map((block, index) => (
                <div
                    key={block.id}
                    className={`w-40 h-70 rounded-r-full overflow-hidden relative ${draggingIndex === index ? 'shadow-lg opacity-50 cursor-grabbing' : 'cursor-move transition duration-200'}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragEnd={handleDragEnd}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={handleDragOver}
                >
                    {block.type === 'image' ? (
                        <div className="absolute inset-0 bg-teal-700 mix-blend-multiply rounded-r-full overflow-hidden">
                            <img
                                src={block.src}
                                alt="Draggable"
                                className="w-full h-full object-cover opacity-70"
                            />
                        </div>
                    ) : (
                        <div
                            className="w-full h-full rounded-r-full"
                            style={{ backgroundColor: block.color }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
