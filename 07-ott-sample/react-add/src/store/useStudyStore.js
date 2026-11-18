import { create } from "zustand";
// 모든 컴포넌트가 사용할수 있는 변수와 메서드를 선언하는곳
export const useStudyStore = create((set, get) => ({
    // 1. 변수
    // input
    text: "",
    // 할일을 저장할 배열
    items: [],
    // 필터변수
    filter: "전체",
    // 2. 메서드
    // input 글자변경
    onText: (value) => set({ text: value }),
    // filter 변경
    onFilter: (value) => set({ filter: value }),
    // 할일추가
    onAdd: () => {
        const { text, items } = get();
        //글자의 여백을 제거후 내용이 없으면 끝내라
        if (!text.trim()) return;
        //추가되는 데이터 형태
        const item = { id: Date.now(), title: text, checked: false }
        set({
            items: [...items, item],
            text: ""
        })
    },
    // 할일삭제
    onRemove: (id) => {
        const { items } = get();
        // 삭제와 같지 않은 요소만 추출
        const item = items.filter(i => i.id !== id)
        set({ items: item })
    },
    // 할일토글
    onToggle: (id) => {
        const { items } = get();
        // 체크된 요소와 같은요소를 찾아서 checked속성만 반대로
        const item = items.map(i => i.id === id ? { ...i, checked: !i.checked } : i)
        set({ items: item })
    }
}))