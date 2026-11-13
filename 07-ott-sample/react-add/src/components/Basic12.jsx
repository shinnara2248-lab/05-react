import React from 'react'
import { Studyinput } from './Studyinput'
import { StudyList } from './StudyList'
import { useStudyStore } from '../store/useStudyStore'

export const Basic12 = () => {

    const { items } = useStudyStore();
    const completed = items.filter(items => items.checked).length
    return (
        <div>
            <h2>할 일 체크리스트</h2>
            <Studyinput />
            <StudyList />
            <p>전체 {items.length}개 / 완료 {completed}개</p>
        </div>
    )
}
