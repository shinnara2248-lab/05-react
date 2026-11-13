import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoFilter } from './TodoFilter'
import { TodoList } from './TodoList'
import { useTodo } from '../store/useTodo'

export const TodoLayout = () => {
    const { todos } = useTodo();
    // 완료된 요소의 개수 completed가 true인 개수
    const comCount = todos.filter((t) => t.completed).length;

    return (
        <div className='todo-layout'>
            <h2>Todo List(zustand)</h2>
            <TodoInput />
            <TodoFilter />
            <TodoList />
            <p>완료: {comCount}/ 전체: {todos.length}</p>
        </div>
    )
}
