import './TodoList.css';

import Todo from "../Todo/Todo"

function TodoList({ todos, removeTodo, toggleComplete }) {
    
    return(
        <ul className="todo-list" style={{ visibility: todos.length ? "visible" : "hidden" }}>
            {todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />)}
        </ul>
    )
}

export default TodoList;
