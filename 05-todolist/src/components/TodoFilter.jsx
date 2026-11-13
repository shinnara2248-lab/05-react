import React from 'react'
import { useTodo } from '../store/useTodo'

export const TodoFilter = () => {
    const { filter, onSetFilter } = useTodo();
    return (
        <div className='filter-list'>
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => onSetFilter("all")}>전체</button>
            <button
                className={filter === "active" ? "active" : ""}
                onClick={() => onSetFilter("active")}>진행중</button>
            <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => onSetFilter("completed")}>완료</button>
        </div>
    )
}
