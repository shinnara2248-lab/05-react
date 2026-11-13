import React, { useState } from 'react'
import { ThemeButton } from './ThemeButton';
import { ThemeShow } from './ThemeShow';
import { ThemeContext } from '../../context/ThemeContext';

export const UseContext2 = () => {
    // 테마를 저장할 변수
    const [theme, setTheme] = useState("light");
    // 테마를 변경할 메서드
    const handleToggle = () => {
        // setTheme(이전값 =>새로운값)
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }
    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>
            <div className='bg-red-100'>
                <h2>테마변경</h2>
                <ThemeShow />
                <ThemeButton />
            </div>
        </ThemeContext.Provider>
    )
}
