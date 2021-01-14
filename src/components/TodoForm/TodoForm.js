import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; // Библиотека для генерации случайного ID

import './TodoForm.css';

function TodoForm({ addTodo }) {
    
    const [todo, setTodo] = useState({
        task: '',
        id: '',
        completed: false
    });

    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
      
            setTodo({ ...todo, task: '' });
        }
    }
    
    return(
        <div className="todo-form">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;