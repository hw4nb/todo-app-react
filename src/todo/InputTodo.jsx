import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

export const InputTodo = () => {
  const { addTodo } = useTodos()
  const [todo, setTodo] = useState('')

  const handleTodo = ({ target }) => {
    setTodo(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.length <= 2) return
    addTodo(todo)
    setTodo('')
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='todoInput'
        placeholder='Add your new task...'
        value={todo}
        onChange={handleTodo}
      />
      <button>Add</button>
    </form>
  )
}
