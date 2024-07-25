
import {useState} from 'react';
import EditTodoItem from './EditTodoItem'
import './ToDo.css'


export default function ToDo(){
    const [tasks, setTasks] = useState(['interview', 'read'])
    const [newTask, setNewTask] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);
   

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

    return(
        <div className='main'>
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
                            <EditTodoItem id={id} tasks={tasks} setEditingTaskId={setEditingTaskId} setTasks={setTasks}/>
                        :
                      (
                        <>
                            <span className='items'>{task}</span>
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