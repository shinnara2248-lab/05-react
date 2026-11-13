import React, { useContext } from 'react'
import { SearchFruit } from '../../context/SearchFruit'

export const SearchText = () => {
    const { text, setText } = useContext(SearchFruit);
    return (
        <div>
            <h2>아래에서 좋아하는 과일을 입력하세요</h2>
            <input type="text" className='border-1'
                value={text}
                onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
