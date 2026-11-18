import React from 'react'
import { menu } from '../data/cafeData'
import { useCartStore } from '../store/useCartStore'


export const MenuList = () => {
  const { onAddCart } = useCartStore();
  return (
    <div>
      <h3>메뉴목록</h3>
      <ul>
        {menu.map(item => (
          <li>{item.name} / {item.price} 원
            <button onClick={() => onAddCart(item)}>담기</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
