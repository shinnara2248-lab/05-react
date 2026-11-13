import React from 'react'
import { useTodo } from '../store/useTodo'

export const TodoInput = () => {
    const { text, onSetInput, onAddTodo } = useTodo();
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo();
    }
    return (
        <div className='todo-input'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text}
                    placeholder='할 일 입력'
                    onChange={(e) => onSetInput(e.target.value)}
                />
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}
