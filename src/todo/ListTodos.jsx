import { useEffect, useState } from 'react'
import { InputTodo } from './InputTodo'
import { Todo } from './Todo'

export const ListTodos = () => {
  const [todos, setTodos] = useState([])

  const handleDeleteTodos = () => {
    if (!confirm('Are you sure you want to delete all tasks?')) return
    setTodos([])
    localStorage.clear()
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (!storedTodos) return
    setTodos(JSON.parse(storedTodos))
  }, [])

  return (
    <>
      <h1 className='text-center'>Todo App</h1>
      <InputTodo todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
      {todos.length > 0 && (
        <div className='clear'>
          <span>
            You have {todos.filter((todo) => todo.status === 'pending').length}{' '}
            pending {todos.length > 1 ? 'tasks' : 'task'}
          </span>
          <button onClick={handleDeleteTodos}>Clear All</button>
        </div>
      )}
    </>
  )
}
