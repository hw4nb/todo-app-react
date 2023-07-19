import './App.css'
import { TodoProvider } from './context/TodoContext'
import { ListTodos } from './todo/ListTodos'

function App() {
  return (
    <main className='container'>
      <TodoProvider>
        <ListTodos />
      </TodoProvider>
    </main>
  )
}

export default App
