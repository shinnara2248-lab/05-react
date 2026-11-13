import { create } from "zustand";

export const useInput = create((set) => ({
    // 변수
    text: "",
    // 메서드
    onText: (value) => set({ text: value })
}))