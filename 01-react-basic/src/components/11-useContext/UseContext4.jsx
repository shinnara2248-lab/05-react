import React, { useState } from 'react'
import { SearchFruit } from '../../context/SearchFruit';
import { SearchText } from './SearchText';
import { FruitShow } from './FruitShow';

export const UseContext4 = () => {
    // 과일의 종류를 저장할 배열
    const fruits = ["apple", "banana", "mango", "applemango", "orange", "melon", "watermelon"]
    const [text, setText] = useState("");
    return (
        <SearchFruit.Provider value={{text, setText, fruits}}>
            <div>
                <h2>찾을 과일의 종류를 입력하세요</h2>
                <SearchText />
                <FruitShow />
            </div>
        </SearchFruit.Provider>
    )
}
