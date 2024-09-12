import React, {useState, useEffect} from "react";
import axiosInstance from './axiosInstance.js';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
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
          const res = await axiosInstance.post('/tasks', {text: newTask});
          
            setTasks([...tasks, res.data]);
            setNewTask("");
        }
    }

    async function deleteTask(id) {
        await axiosInstance.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
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

                <ol>
                    {tasks.map(task => 
                        <li key = {task._id}>
                            <span className = "text">{task.text}</span>
                            <button className = "delete-button" 
                                    onClick = {() => deleteTask(task._id)}>
                                    ❌
                            </button>
                            <button className = "move-button" 
                                    onClick = {() => moveTaskUp(task._id)}>
                                    👆
                            </button>
                            <button className = "move-button" 
                                    onClick = {() => moveTaskDown(task._id)}>
                                    👇
                            </button>
                        </li>)}
                </ol>

    </div>);
}

export default ToDoList;