import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FaCheckCircle } from 'react-icons/fa';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={todo.id}
        >
            <div>{todo.text}</div>
            <div className="icons">
                <button
                    onClick={() => completeTodo(todo.id)}
                    className="complete-button"
                >
                    <FaCheckCircle /> Complete
                </button>
                <button
                    onClick={() => {
                        if (!todo.isComplete) {
                            setEdit({ id: todo.id, value: todo.text });
                        }
                    }}
                    disabled={todo.isComplete} // Disable if complete
                    className="edit-button"
                >
                    <TiEdit /> Edit
                </button>
                <button
                    onClick={() => {
                        if (!todo.isComplete) {
                            removeTodo(todo.id);
                        }
                    }}
                    disabled={todo.isComplete} // Disable if complete
                    className="delete-button"
                >
                    <RiCloseCircleLine /> Delete
                </button>
            </div>
        </div>
    ));
}

export default Todo;
