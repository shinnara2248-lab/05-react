import React, { useContext } from 'react'
import { SearchFruit } from '../../context/SearchFruit'

export const FruitShow = () => {
    const { text, fruits } = useContext(SearchFruit);
    const filtered = fruits.filter((item) => item.includes(text))
    return (
        <div>
            <h2>과일 리스트</h2>
            <ul>
                {filtered.map((item, id) => <li>{item}</li>)}
            </ul>
        </div>
    )
}
