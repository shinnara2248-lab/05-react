import React from 'react'
// 오브젝트 배열
const skillLists = [
    { id: 1, title: "html", content: "홈페이지 구조를 나타낼때 사용" },
    { id: 2, title: "css", content: "html을 디자인할때 사용" },
    { id: 3, title: "javascript", content: "동적인 움직임" },
    { id: 4, title: "figma", content: "인획, 디자인" },
    { id: 5, title: "react", content: "가상돔, 컴포넌트 사용" }
]

export const ListObject2 = () => {
    return (
        <div>
            <h2>프론트엔드 스킬</h2>
            <ul className='skill-list'>
                {skillLists.map(skill =>
                    <li key={skill.id}>
                        <h3>{skill.title}</h3>
                        <p>{skill.content}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}
