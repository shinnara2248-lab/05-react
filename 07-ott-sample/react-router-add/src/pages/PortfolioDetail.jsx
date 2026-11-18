import React from 'react'

// 전체 프로젝트 데이터와 주소줄에 넘어온 id값
export const PortfolioDetail = () => {
  // 주소줄에 넘어온 데이터 활용하기
  return (
    <div>
      <div className='inner'>
        <div className="flex">
          <div>
            <p></p>
            <h2></h2>
            <p></p>
            <ul></ul>
          </div>
        </div>
        <div className="flex">
          <div>
            <h2>설계 목표</h2>
            <p></p>
          </div>
          <div>
            <h2>구현 방식</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
