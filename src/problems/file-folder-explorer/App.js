"use client";
import './styles.css'
import json from './data.json'
import { useState } from 'react';

// expand and collapse for folder
// add remove in file/folder

const List = ({ list }) => {
    // console.log('list is : ',list)
    const [isExpanded, setIsExpanded] = useState({});
    return (
        <div className='container'>
            {list?.map((node) => (
                <div key={node.id}>
                    {node.isFolder === "true" &&
                        <span
                            style={{ marginRight: "4px" }}
                            onClick={() => setIsExpanded((prev) => ({
                                ...prev,
                                [node.id]:!prev[node.id]
                            }))}
                        >
                            {isExpanded?.[node.id] ? "▾" : "▸"}
                        </span>}
                    <span>{node.isFolder === "true" ? "📁" : "📄"} {node.name}</span>
                    {/* {console.log('node is : ',node)} */}
                    {/* {console.log('node.children is : ',node.children)} */}
                    {isExpanded?.[node.id] && node?.children && <List list={node.children} />}
                </div>
            ))}
        </div>
    )
}
export default function App() {
    const [data, setData] = useState(json);
    return (
        <div>
            <h1>File/Folder Explorer</h1>
            <List list={data} />
        </div>
    )
}