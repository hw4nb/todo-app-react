import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const InputTodo = ({ todos, setTodos }) => {
  const [formValues, setFormValues] = useState({
    id: '',
    todo: '',
    status: 'pending',
  })

  const saveTodo = () => {
    const updatedTodos = [{ ...formValues }, ...todos]
    setTodos((prevTodos) => [{ ...formValues }, ...prevTodos])
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const handleTodo = ({ target }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      id: uuid(),
      todo: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValues.todo.length <= 2) return
    saveTodo()
    setFormValues({ id: '', todo: '', status: 'pending' })
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='todoInput'
        placeholder='Add your new task...'
        value={formValues.todo}
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
