import PropTypes from 'prop-types'

export const Todo = ({ id, todo, setTodos }) => {
  const handleDeleteTodo = () => {
    if (!confirm(`Are you sure you want to delete the task: ${todo}?`)) return
    setTodos((todos) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }

  return (
    <li className='todo'>
      <span>{todo}</span>
      <button onClick={handleDeleteTodo}>x</button>
    </li>
  )
}

Todo.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.string,
  setTodos: PropTypes.func,
}
