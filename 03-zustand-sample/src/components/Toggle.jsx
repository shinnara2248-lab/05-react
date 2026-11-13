import React from 'react'
import { useToggle } from '../store/useToggle'

export const Toggle = () => {
    // const toggle1 = useToggle(state => state.toggle)
    const { toggle, onToggle } = useToggle();
    return (
        <div>
            <h2>{toggle ? "ON" : "OFF"}</h2>
            <button onClick={onToggle}>토글</button>
        </div>
    )
}
