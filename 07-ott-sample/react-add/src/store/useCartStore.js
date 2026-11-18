import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    // 카트 변수
    carts: [],
    // 담기를 클릭하면 상품을 카트에 담는 메서드
    onAddCart: (item) => {
        const { carts } = get();

        // 기존에 있는 제품인지 체크하기
        const exists = carts.some(cart => cart.id === item.id)
        console.log(exists)
        if (exists) {
            // 이미 카트에 담긴 요소를 추가
            // carts에 있는 데이터와 매개값으로 넘어온 item 데이터의 id값을 비교하여
            // 같은 id를 가지는 요소는 count값을 1증가시켜서 넣고, 나머지는 그냥 다시 넣기
            set({
                carts: carts.map(cart => cart.id === item.id ? { ...cart, count: cart.count + 1 } : cart)
            })
        }
        else {
            // 새로운 데이터 추가
            set({
                carts: [
                    ...carts, { ...item, count: 1 }
                ]
            })
        }
    },
    // 카트에서 상품 삭제 메서드
    onRemoveCart: (id) => {
        const { carts } = get();
        set({
            carts: carts.filter(cart => cart.id !== id)
        })
    }
}))