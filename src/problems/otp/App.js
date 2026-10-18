"use client";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

const OTP_DIGIT_COUNT = 5;
export default function App() {
    const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
    const refArr = useRef([])
    const handleOnChange = (value, index) => {

        if (isNaN(value)) {
            return;
        }
        const newValue = value.trim();
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);
        newValue && refArr.current[index + 1]?.focus();
    }

    const handleOnKeyDown = (e, index) => {
        if (!e.target.value && e.nativeEvent.key === "Backspace") {
            refArr.current[index - 1]?.focus();
        }
    }

    useEffect(() => {
        refArr.current[0]?.focus();
    }, [])

    return (
        <div className="otp-container">
            <h1>Validate OTP</h1>
            <div>
                {inputArr.map((input, index) =>
                    <input
                        value={inputArr[index]}
                        className="otp-input"
                        key={index}
                        type="text"
                        ref={(input) => refArr.current[index] = input}
                        onChange={(e) => handleOnChange(e.target.value, index)}
                        onKeyDown={(e) => handleOnKeyDown(e, index)} />
                )}
            </div>
        </div>
    )
}