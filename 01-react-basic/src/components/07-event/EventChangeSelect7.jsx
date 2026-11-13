import React, { useState } from 'react'

export const EventChangeSelect7 = () => {
    const [fruit, setFruit] = useState("딸기");
    const handleChange = (e) => {
        setFruit(e.target.value)
    }
    return (
        <div>
            <h2>select</h2>
            <p>좋아하는 과일은 : {fruit}</p>
            <select name="" id="" onChange={handleChange}>
                <option value="딸기">딸기</option>
                <option value="자두">자두</option>
                <option value="수박">수박</option>
                <option value="멜론">멜론</option>
                <option value="파인애플">파인애플</option>
            </select>
        </div>
    )
}
