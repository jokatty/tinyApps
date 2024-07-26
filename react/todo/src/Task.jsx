import React from "react";


export default function Task({taskProps, id, task}){

    return (
        <>
            <span className='items'>{task}</span>
            <button onClick={()=> taskProps.deleteItem(id)} >delete</button>
            <button onClick={()=> taskProps.updateTask(id)}>update</button>
        </>
    )
}