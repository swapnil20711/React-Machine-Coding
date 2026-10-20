"use client";


import { useState } from "react";
import "./styles.css";

const checkboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];


const Checkboxes = ({ data, checked, setChecked }) => {

  const handleChange = (isChecked, node) => {
    setChecked(prev => {
      const newState = { ...prev, [node.id]: isChecked };
      // if children are present then add all of them to new states

      const updateChildren = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      }

      updateChildren(node)
      //if all the children are checked mark the parent as checked

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;
          const childResults = node.children.map(verifyChecked)
        const allChildrenChecked = childResults.every(Boolean);
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      }

      checkboxesData.forEach((node) => verifyChecked(node));

      return newState;
    })
  }
  return (
    <div>
      {data.map((node) =>
        <div className="parent" key={node.id}>
          <input onChange={(e) => {
            handleChange(e.target.checked, node)
          }} type="checkbox" checked={checked[node.id] || false}></input>
          <span>{node.label}</span>
          {node.children && <div><Checkboxes data={node.children} checked={checked} setChecked={setChecked} /></div>}
        </div>)}
    </div>
  )
}

export default function App() {
  const [checked, setChecked] = useState({});
  console.log('checked is : ', checked)
  return (
    <div className="App">
      <h1>Nested check boxes</h1>
      <Checkboxes data={checkboxesData} checked={checked} setChecked={setChecked} />
    </div >
  );
}
