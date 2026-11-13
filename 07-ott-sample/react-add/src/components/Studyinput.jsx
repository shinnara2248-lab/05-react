
import React from 'react';
import { useStudyStore } from '../store/useStudyStore';

export const Studyinput = () => {
    const { text, onText, onAdd } = useStudyStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                공부할 내용
                <input
                    type="text"
                    value={text}
                    onChange={(e) => onText(e.target.value)}
                />
            </label>
            <button type="submit">추가</button>
        </form>
    );
};
