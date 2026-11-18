import React from 'react'
import { StudyInput } from './StudyInput'
import { StudyList } from './StudyList'
import { useStudyStore } from '../store/useStudyStore'
// 전역변수

export const Basic12 = () => {
    const { items } = useStudyStore();
    const completed = items.filter(item => item.checked).length
    return (
        <div>
            <h2>할일 체크리스트</h2>
            <StudyInput />
            <StudyList />
            <p>전체 {items.length}개 / 완료 {completed} 개</p>
        </div>
    )
}
