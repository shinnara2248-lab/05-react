import { create } from "zustand";

export const useCounter = create(set => ({
    // 변수
    count: 0,
    // 메서드
    onPlus: () => set(state =>
        ({ count: state.count + 1 })
    ),
    onMinus: () => set(state =>
        ({ count: state.count - 1 })
    )
}))