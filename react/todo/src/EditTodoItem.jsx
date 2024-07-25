import React, {useState} from "react";

export default function EditTodoItem({id, tasks, setTasks, setEditingTaskId}){
    const [editedText, setEditedText] = useState("");


    // handle edit
    function handleEdit(e){
        setEditedText(e.target.value)
    }

    // call back for edit save
    function handleSave(id, editedText){
        
        const updatedTasks = tasks.map(
                (task, index) => (
                    index === id ? editedText: task
                )
        )
        setTasks(updatedTasks)
        setEditingTaskId(null)
        setEditedText('')
    
    }

    return(
        <>
            <input value={editedText} onChange={handleEdit}/>
            <button onClick={()=> handleSave(id, editedText)}>save</button>
        </>
    )
}