import { create } from "zustand";

export const useTodo = create((set, get) => ({
    // 1.변수 
    // input 연동변수
    text: "",
    // 할 일을 저장할 변수
    todos: [],

    // 2. 메서드
    // input 변수값을 변경할 변수
    onText: (value) => set({ text: value }),
    // 추가 버튼을 클릭하면 할일을 배열에 저장
    onAddTodo: () => {
        // set((state) => ({
        //     todos: [...state.todos, state.text],
        //     text: ""
        // }))
        //text에 저장된 내용을 가져오고, todos 배열에 저장된 내용을 가져와서 변수에 저장
        const { text, todos } = get();
        // 추가로 넣은 요소를 새로운 배열에 넣기
        const newTodo = [...todos, text];
        set(() => ({
            todos: newTodo,
            text: ""
        }))
    }
}))