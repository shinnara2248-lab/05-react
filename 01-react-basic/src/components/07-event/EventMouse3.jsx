import React from 'react'

export const EventMouse3 = () => {
    const handleOver = () => {
        console.log("over")
    }

    const handleOut = () => {
        console.log("out")
    }
    return (
        <div>
            <h2>마우스오버/아웃</h2>
            <div onMouseOver={handleOver}
                onMouseOut={handleOut}
            >여기에 마우스를 올려주세요</div>
        </div>
    )
}
