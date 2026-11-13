import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ThemeButton = () => {
    const { theme, handleToggle } = useContext(ThemeContext);
    return (
        <div>
            <button className='bg-blue-200 p-2'
                onClick={handleToggle}>
                테마변경 : {theme}
            </button>
        </div>
    )
}
