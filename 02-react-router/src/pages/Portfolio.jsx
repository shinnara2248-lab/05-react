import React from 'react'
import { Outlet } from 'react-router-dom'

export const Portfolio = () => {
    return (
        <section>
            <div className='inner'>
                <h2>Portfolio</h2>
                <p>Portfolio 페이지입니다</p>
                {/* 하위 페이지가 나타나는 영역 표시하기 */}
                <Outlet />
            </div>
        </section>
    )
}
