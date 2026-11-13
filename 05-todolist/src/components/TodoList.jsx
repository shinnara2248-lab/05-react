import React from 'react'
import { useTodo } from '../store/useTodo'
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos, filter } = useTodo();
    // 조건에 맞는 요소를 저장
    const filterdTodo = todos.filter((todo) => {
        if (filter === "active") {
            return !todo.completed
        }
        if (filter === "completed") {
            return todo.completed;
        }
        return true;
    })
    return (
        <div>
            <ul className='todo-list'>
                {filterdTodo.map((todo) => (
                    <TodoItem key={todo.id} sendTodo={todo} />
                ))}
            </ul>
        </div>
    )
}
