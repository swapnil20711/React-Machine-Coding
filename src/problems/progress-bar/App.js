"use client";
import { useEffect, useState } from "react";
import styles from "./styles.css"

const ProgressBar = ({ progress }) => {
    const [animatedProgress,setAnimatedProgress] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setAnimatedProgress(progress)
        },100)
    },[progress])

    return (
        <div className="outer">
            <div
                aria-valuenow={progress}
                aria-valuemax={"100"}
                aria-valuemin={"0"}
                role="progressbar"
                className="inner"
                style={{
                    // width: `${progress}%`,
                    transform:`translateX(${animatedProgress-100}%)`,
                    color: animatedProgress < 5 ? "black" : "white"
                }}>
                {progress}%
            </div>
        </div>
    )
}

export default function App() {
    const bars = [1, 5, 10, 30, 50, 70, 90, 100]
    return (
        <div>
            <h1>Progress Bar</h1>
            {bars.map((value) => <ProgressBar key={value} progress={value} />)}
        </div>
    )
}