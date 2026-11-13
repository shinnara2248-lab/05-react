import React, { useEffect, useState } from 'react'

export const UseEffect5 = () => {
    const [data, setData] = useState(null);
    // 외부 데이터 불러오기 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(json => {
                console.log("^^^^^데이터^^^^^", json)
                setData(json);
            })
    }, [])
    return (
        <div>
            <h2>API 데이터 불러오기</h2>
            {data !== null ? <strong>데이터개수:{data.length}</strong> : <strong>로딩중....</strong>}
        </div>
    )
}
