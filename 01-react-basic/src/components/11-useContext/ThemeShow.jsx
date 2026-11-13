import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ThemeShow = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>현재테마 : {theme}</h2>
        </div>
    )
}