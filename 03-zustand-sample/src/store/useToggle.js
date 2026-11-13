import { create } from "zustand";

export const useToggle = create(set => ({
    // 변수
    toggle: false,
    // 메서드
    onToggle: () => set(s => ({ toggle: !s.toggle }))
}))