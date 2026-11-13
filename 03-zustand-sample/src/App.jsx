
import './App.css'
import { Counter } from './components/Counter'
import { TextInput } from './components/TextInput'
import { TodoList } from './components/TodoList'
import { Toggle } from './components/Toggle'

function App() {

  return (
    <>
      <Counter />
      <Toggle />
      <TextInput />
      <TodoList />
    </>
  )
}

export default App
