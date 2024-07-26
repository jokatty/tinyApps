import React, { useContext} from "react";
import { BgColorContext } from "./ToDo";


export default function Task({taskProps, id, task}){
    const bgColor = useContext(BgColorContext)

    return (
        <>
            <span className='items'>{task}</span>
            <button onClick={()=> taskProps.deleteItem(id)} style={{background:bgColor}}>delete</button>
            <button onClick={()=> taskProps.updateTask(id)}>update</button>
        </>
    )
}