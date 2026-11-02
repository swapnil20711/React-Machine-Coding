"use client";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState(["dummy", "chips"]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()!=="") {
      setChips((prev) => ([...prev, inputText.trim()]));
      setInputText("")
    }
  }

  const handleDeleteChip = (index)=>{
    // remove value on index from chips array
    const copyChips = [...chips];
    copyChips.splice(index,1)
    setChips(copyChips);
  }
  return (
    <div className="chips-input">
      <h1>Chips Input</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => { handleKeyDown(e) }}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
        {chips.map((chip,index) =>
          <div style={{ backgroundColor: "gray", borderRadius: "18px", padding: "10px" }}>
            {chip}
            <button style={{ marginLeft: "4px", color: "red" }}
              onClick={() => {
                handleDeleteChip(index)
              }}>✕
              </button>
          </div>
        )}
      </div>
    </div>
  );
}
