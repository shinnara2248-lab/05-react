import React from 'react'

export const ComProps2 = ({uname,hour}) => {
  return (
    <div>
        <h2>속성전달 방법 2</h2>
        <p>따로받기</p>
        <p>안녕 {uname} 너는 이제 끝이야~~~ 매일 {hour} 시간만 공부하면!!</p>
    </div>
  )
}
