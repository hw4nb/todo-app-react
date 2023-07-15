import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const InputTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState('')
  const [id, setId] = useState('')
  const [date, setDate] = useState('')

  const saveTodo = () => {
    const newTodo = { todo, id, date }
    const updatedTodos = [newTodo, ...todos]
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const handleTodo = ({ target }) => {
    setTodo(target.value)
    setId(uuid())
    setDate(new Date().toLocaleString())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.length <= 2) return
    saveTodo()
    setTodo('')
    setId('')
    setDate('')
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

InputTodo.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
}
