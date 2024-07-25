
import {useState} from 'react';

export default function ToDo(){
    const [tasks, setTasks] = useState(['interview', 'read'])
    const [newTask, setNewTask] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedText, setEditedText] = useState("");

    function newItem(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        setTasks((prevTasks)=> [...prevTasks, newTask ])
        setNewTask("")
    }
    // delete an item
    function deleteItem(id){
        const updatedTasks = tasks.filter((_, index)=>{
            return index !== id
        })
        setTasks(updatedTasks)
    }

    // update a task
    function updateTask(id){
        setEditingTaskId(id)
    }

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
        <div>
            <h1>To do list</h1>
            <input type="text"
                value={newTask}
                placeholder="enter a task"
                onChange={newItem}
            />
            <button onClick={addTask}>add task</button>
            <ol>
                {tasks.map((task, id)=> 
                <li key={id}>
                    {
                        editingTaskId===id ? 
                            (
                                <>
                                <input value={editedText} onChange={handleEdit}/>
                                <button onClick={()=> handleSave(id, editedText)}>save</button>
                            </>
                            )
                        :
                      (
                        <>
                            <span>{task}</span>
                            <button onClick={()=> deleteItem(id)}>delete</button>
                            <button onClick={()=> updateTask(id)}>update</button>
                        </>
                      )

                    }                  
                </li>              
                )}
            </ol>          
         </div>
    )
}