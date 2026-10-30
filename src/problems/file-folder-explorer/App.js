"use client";
import './styles.css'
import json from './data.json'
import { useState } from 'react';

// expand and collapse for folder
// add remove in file/folder

const List = ({ list ,addNodeToList,deleteNodeFromList}) => {
    // console.log('list is : ',list)
    const [isExpanded, setIsExpanded] = useState({});
    return (
        <div className='container'>
            {list?.map((node) => (
                <div key={node.id}>
                    {node.isFolder === "true" &&
                        <span
                            style={{ marginRight: "4px", }}
                            onClick={() => setIsExpanded((prev) => ({
                                ...prev,
                                [node.id]: !prev[node.id]
                            }))}
                        >
                            {isExpanded?.[node.id] ? "▾" : "▸"}
                        </span>}
                    <span>{node.isFolder === "true" ? "📁" : "📄"} {node.name}</span>

                    {node.isFolder === "true" &&
                    <span onClick={()=>addNodeToList(node.id)}>
                        <img
                            className='folder-img'
                            src='https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png'>
                        </img>
                        </span>
                    }
                    <span onClick={()=>{deleteNodeFromList(node.id)}}>
                        <img className='folder-img' alt='icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XReh1HmaDLi_xlHVYVPLLws6XTO0jUoMPBnTteN6Ew&s=10'></img>
                    </span>
                    {/* {console.log('node is : ',node)} */}
                    {/* {console.log('node.children is : ',node.children)} */}
                    {isExpanded?.[node.id] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />}
                </div>
            ))}
        </div>
    )
}
export default function App() {
    const [data, setData] = useState(json);
    const addNodeToList = (parentId)=>{
        const name = prompt("Enter name")
        const updateTree = (list)=>{
            return list.map((node)=>{
                if(node.id===parentId){
                    return {
                        ...node,
                        children:[...node.children,{
                            id:Date.now().toString(),
                            name:name,
                            isFolder:"true",
                            children:[]
                        }]
                    }
                }

                // DFS
                if(node.children){
                    return {...node,children:updateTree(node.children)}
                }

                return node;
            })
        }

        setData(prev=>updateTree(prev))
    }
    const deleteNodeFromList = (itemId)=>{
        const updateTree = (list)=>{
            return list.filter((node)=>node.id!==itemId).map((node)=>{
                if(node.children){
                    return {...node,children:updateTree(node.children)}
                }
                return node;
            })
        }
        setData(prev=>updateTree(prev))
    }
    return (
        <div>
            <h1>File/Folder Explorer</h1>
            <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
        </div>
    )
}