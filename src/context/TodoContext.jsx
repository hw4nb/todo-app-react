import PropTypes from 'prop-types'
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodos must be used within a provider')
  return context
}

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const addTodo = (todo) => {
    setTodos([{ id: uuid(), todo, status: 'pending' }, ...todos])
  }

  const checkTodo = (id, checked) => {
    const todoToUpdate = todos.find((todo) => todo.id === id)
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    if (!todoToUpdate) return

    if (checked) {
      updatedTodos.push({ ...todoToUpdate, status: 'done' })
    } else {
      updatedTodos.unshift({ ...todoToUpdate, status: 'pending' })
    }

    setTodos([...updatedTodos])
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const deleteAllTodos = () => setTodos([])

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, checkTodo, deleteTodo, deleteAllTodos }}
    >
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
