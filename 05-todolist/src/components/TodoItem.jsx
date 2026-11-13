import React from 'react'
import { useTodo } from '../store/useTodo'

export const TodoItem = ({ sendTodo }) => {
    const { onRemoveTodo, onToggleTodo } = useTodo();
    return (
        <li>
            <span className={sendTodo.completed ? "completed" : ""}
                onClick={() => onToggleTodo(sendTodo.id)}
            >{sendTodo.text}</span>
            <button
                onClick={() => onRemoveTodo(sendTodo.id)}
            >삭제</button>
        </li>
    )
}
