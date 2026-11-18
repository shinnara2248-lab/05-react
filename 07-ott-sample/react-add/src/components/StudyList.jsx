import React from 'react'
import { useStudyStore } from '../store/useStudyStore';
const status = ["전체", "미완료", "완료"];
export const StudyList = () => {
    const { items, onRemove, onToggle, filter, onFilter } = useStudyStore();

    // 필터링
    let filtered = items;
    if (filter === "완료") {
        filtered = items.filter(item => item.checked === true)
    }
    if (filter === "미완료") {
        filtered = items.filter(item => item.checked === false)
    }

    return (
        <div>
            <div>
                <label>상태
                    <select value={filter}
                        onChange={e => onFilter(e.target.value)}>
                        {status.map(value =>
                            <option key={value}>{value}</option>
                        )}
                    </select>
                </label>
            </div>
            <ul>
                {filtered.map(item =>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => onToggle(item.id)}
                            /></label>
                        {item.title}
                        <button
                            onClick={() => onRemove(item.id)}>
                            삭제
                        </button>
                    </li>)}
            </ul>
        </div>
    )
}
