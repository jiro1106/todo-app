import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return; // Prevent adding empty or whitespace-only todos
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return; // Prevent updating to empty or whitespace-only values
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete; // Toggle complete status
        }
        return todo;
    });
    setTodos(updatedTodos);
};


    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            {todos.length === 0 ? (
                <p>No todos available. Add a todo to get started!</p>
            ) : (
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            )}
        </div>
    );
}

export default TodoList;
