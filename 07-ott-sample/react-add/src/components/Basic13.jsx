// 1. 음료와 관련 데이터 외부 저장하기
// 2. 장바구니 상태변수 - 전역변수로
// 3. 메뉴목록을 보여주는 컴포넌트
// 4. 주문내역을 보여주는 컴포넌트
import React from 'react'
import { MenuList } from './MenuList'
import { OrderList } from './OrderList'

export const Basic13 = () => {
  return (
    <div>
      <h2>카페주문</h2>
      <MenuList />
      <hr />
      <OrderList />
    </div>
  )
}
