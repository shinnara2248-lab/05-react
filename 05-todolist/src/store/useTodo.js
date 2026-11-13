import { create } from "zustand";

export const useTodo = create((set, get) => ({
    // 1. 변수선언
    // input에 입력된 내용을 연동한 변수
    text: "",
    // 할일을 저장할 배열
    todos: [],
    // all, active, completed를 체크할 변수
    filter: "all",
    // 2. 메서드 선언
    // input에 입력한 데이터를 변경할 메서드
    onSetInput: (value) => set({ text: value }),
    // todos배열에 데이터 추가
    // onAddTodo: () => set((state) => {
    //     if (!state.text.trim()) return state;
    //     return {
    //         todos: [
    //             ...state.todos,
    //             {
    //                 id: Date.now(),
    //                 text: state.text,
    //                 completed: false,
    //             }
    //         ],
    //         text: ""
    //     }
    // }),
    onAddTodo: () => {
        // 현재 상태에서 text, todos를 가져오기
        const { text, todos } = get();
        // 빈 문자열이면 추가하지 않기
        if (!text.trim()) return;
        // 새로운 입력된 내용을 Todos에 넣기
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        // 기존 배열에 넣기
        const addTodo = [...todos, newTodo]
        set(() => ({
            todos: addTodo,
            text: ""
        }))
    },
    // todos배열에 데이터 삭제
    onRemoveTodo: (id) => {
        const { todos } = get();
        //  id와 다른 요소만 저장
        const removeTodo = todos.filter((todo) => todo.id !== id)
        set(() => ({
            todos: removeTodo
        }))
    },
    // todos배열에 데이터 토글
    onToggleTodo: (id) => {
        const { todos } = get();
        // id가 같은 요소를 찾아서 completed 값을 반대로 만들기
        const toggleTodo = todos.map((todo) =>
            todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : todo)

        set(() => ({
            todos: toggleTodo
        }))
    },
    // todos배열에 데이터 필터
    onSetFilter: (filter) => {
        set({ filter })
    }
}))