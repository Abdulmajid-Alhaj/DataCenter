import React, { useRef, useState } from "react";

export default function OtpInput() {
    const [values, setValues] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (e, i) => {
        const val = e.target.value;

        if (!/^\d?$/.test(val)) return;

        const newValues = [...values];
        newValues[i] = val;
        setValues(newValues);

        if (val && i < inputsRef.current.length - 1) {
            inputsRef.current[i + 1].focus();
        }
    };

    return (
        <div className="flex space-x-2 justify-center">
            {values.map((value, i) => (
                <input
                    key={i}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e, i)}
                    ref={(el) => (inputsRef.current[i] = el)}
                    className="w-10 h-10 rounded-xl shadow-md text-center text-xl outline-none border border-gray-300 focus:ring-2 focus:ring-teal-300"
                />
            ))}
        </div>
    );
}
