import React from 'react'
import { useStudyStore } from '../store/useStudyStore'

export const StudyInput = () => {
    const { text, onText, onAdd } = useStudyStore();
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>공부할내용
                <input value={text}
                    onChange={e => onText(e.target.value)} />
                <button>추가</button>
            </label>
        </form>
    )
}
