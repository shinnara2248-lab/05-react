import React from 'react'
import { useTodo } from '../store/useTodo';

export const TodoList = () => {
    const { text, todos, onText, onAddTodo } = useTodo();
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo();
    }
    return (
        <div>
            <h2>TodoList</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text}
                    onChange={(e) => onText(e.target.value)} />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {todos.map((todo, id) =>
                    <li key={id}>{todo}</li>
                )}
            </ul>
        </div>
    )
}
