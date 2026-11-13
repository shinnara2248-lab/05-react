import React from 'react'
import s from "styled-components"

const Button = s.button`
border:1px solid #ccc;
border-radius:30px;
padding:4px 20px;
color:#222;
background:${(props) => props.bg === "sky" ? "skyblue" : props.bg === "pink" ? "pink" : "#fff"}
`
export const StyledComponent8 = () => {
    return (
        <div>
            <h2>styled component</h2>
            <p>props로 매개값을 넘겨, 스타일을 제어할 수 있다</p>
            {/* button 3개
            1번 버튼 - 테두리, 모서리 둥글기, 안쪽여백, 글자색, 배경=흰색
            2번 버튼 - 배경 파랑색
            3번 버튼 - 배경 분홍색 */}
            <Button>1번</Button>
            <Button bg="sky">2번</Button>
            <Button bg="pink">3번</Button>
        </div>
    )
}