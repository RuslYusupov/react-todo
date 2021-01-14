import './Todo.css';

function Todo( {todo, removeTodo, toggleComplete} ) {
    
    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    
    return(
        <li className="todo-div">
             <div className="checkbox-label-container">
                <label className="checkbox-label">
                    <input type="checkbox" checked={todo.completed} onChange={handleCheckboxClick} />
                    <span className="checkbox-custom"></span>
                </label>
            </div>
            <p
                style={{
                textDecoration: todo.completed ? 'line-through' : null
                }}
            >
                {todo.task}
            </p>
            <div className="btn-container">
                <button onClick={handleRemoveClick}>X</button>
            </div>
        </li>
    )
}

export default Todo;