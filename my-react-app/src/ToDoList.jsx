import React, {useState, useEffect} from "react";
import axiosInstance from './axiosInstance.js';
import Note from "./Note.jsx";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
      async function fetchTasks() {
        const res = await axiosInstance.get('/tasks');
        setTasks(res.data);
      }
      fetchTasks();
    }, []);
    
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    async function addTask() {
        if(newTask.trim() !== "" ) {
          const res = await axiosInstance.post('/tasks', {title: newTitle, text: newTask});
            
            setTasks(t => [...t, res.data]);
            setNewTitle("");
            setNewTask("");
        }
    }

    async function updateTask(id) {
        await axiosInstance.put(`/tasks/${id}`);
        
    }

    async function deleteTask(id) {
        await axiosInstance.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    }

    return (<div className = "to-do-list">
                <h1>To Do List</h1>
                <div>
                    <input 
                        type = "text"
                        placeholder = "Enter a task..." 
                        value={newTask}
                        onChange = {handleInputChange}/>
                    <button
                        className="add-button"
                        onClick = {addTask}>
                        Add
                    </button>
                </div>

                <div className = "note-container">
                    {tasks.map(task => 
                        <Note key = {task._id} title = {task.title} content = {task.text} onDelete = {() => {deleteTask(task._id)}}>
                            {/* <span className = "text">{task.text}</span> */}
                            <button className = "edit-button"
                                    onClick = {() => updateTask(task._id)}>
                                    📝
                            </button>
                            
                        </Note>)}

                </div>

    </div>);
}

export default ToDoList;