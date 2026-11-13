
import { create } from "zustand";

export const useStudyStore = create((set, get) => ({
    // 초기 상태
    text: "",
    items: [],
    filter: "전체",

    // 입력 글자 변경
    onText: (value) => set({ text: value }),

    // 필터 변경
    onFilter: (value) => set({ filter: value }),

    // 공부할 내용 추가
    onAdd: () => {
        const { text, items } = get();
        // 글자의 여백을 제거 후 내용라 없으면 끝내라
        if (!text.trim()) return;
        // 추가태는 데이터 형태
        const item = {
            id: Date.now(),
            title: text,
            checked: false
        };

        set({
            items: [...items, item],
            text: ""
        });
    },

    // 삭제
    onRemove: (id) => {
        const { items } = get();

        set({
            items: items.filter(item => item.id !== id)
        });
    },

    // 완료 상태 변경
    onToggle: (id) => {
        const { items } = get();

        set({
            items: items.map(item =>
                item.id === id
                    ? { ...item, checked: !item.checked }
                    : item
            )
        });
    }
}));
