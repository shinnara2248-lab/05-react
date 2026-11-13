import React from 'react'

export const ComChild5 = ({children}) => {
  return (
    <div>
        <h2>부모컨포넌트에 자식요소 받기</h2>
        <div>{children}</div>
    </div>
 )
}
