import React from 'react'
import { useInput } from '../store/useInput'

export const TextInput = () => {
    const { text, onText } = useInput();
    return (
        <div>
            <h2>입력값 : {text}</h2>
            <input type="text"
                value={text}
                onChange={(e) => onText(e.target.value)} />
        </div>
    )
}
