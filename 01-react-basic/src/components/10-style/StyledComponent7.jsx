import React from 'react'
import styled from "styled-components"


const Title = styled.h2`
    font-size:40px;
    background:skyblue;
    `

const Text = styled.p`
    color:green;
    text-align:right;
    `
export const StyledComponent7 = () => {
    return (
        <div>
            {/* h2 글자크기 40px, 배경색 */}
            <h2>styled component</h2>
            {/* p 글자색 초록, 오른쪽 정렬 */}
            <p>css를 컴포넌트화 시킨거를 말한다</p>
            <hr />
            <Title>제목</Title>
            <Text>설명</Text>
        </div>
    )
}
