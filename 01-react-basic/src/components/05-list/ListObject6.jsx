import React from 'react'
const users = [
    { id: 1, name: "신나라", gender: true },
    { id: 2, name: "정보미", gender: true },
    { id: 3, name: "변다솜", gender: true },
    { id: 4, name: "박경완", gender: false },
    { id: 5, name: "김형래", gender: false }
]

// gender false를 추출하여 새로운 배열 만들기
const womenUsers = users.filter(w => w.gender === false);
console.log(womenUsers);
export const ListObject6 = () => {
    return (
        <div>
            <h2>리스트 필터</h2>
            <p>배열오브젝트에서 조건에 맞는 요소만 추출하여 출력</p>
            <pre>
                {/* 배열 오브젝트를 조작하여 새로운 배열 만들기
            새로운 배열명 = 배열.map((데이터를 저장할 변수, 순서, 배열별칭) => 새로운 내용 만들기) */}
                {/* 배열 오브젝트중 조건에 맞는것만 추출하여 새로운 배열 만들기
            새로운 배열명 = 배열.filter((데이터를 저장할 변수, 순서, 배열별칭) => 조건문) */}
            </pre>
            <ul>
                {womenUsers.map((w) =>
                    <li key={w.id}>
                        {w.name}
                    </li>
                )}
            </ul>
        </div>
    )
}
