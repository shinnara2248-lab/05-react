import React from 'react'
import { useCartStore } from '../store/useCartStore'

export const OrderList = () => {
    const { carts, onRemoveCart } = useCartStore();
    return (
        <div>
            <h3>주문내역</h3>
            <ul>
                {carts.map(cart => (
                    <li>{cart.name} {cart.count}잔
                        <button onClick={() => onRemoveCart(cart.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
