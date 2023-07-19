import PropTypes from 'prop-types'

export const Todo = ({ todo, setTodos }) => {
  const { id, todo: todoText, status } = todo

  const handleCheckTodo = ({ target }) => {
    setTodos((todos) => {
      const todoToUpdate = todos.find((todoItem) => todoItem.id === id)
      const updatedTodos = todos.filter((todoItem) => todoItem.id !== id)

      updatedTodos.push({
        ...todoToUpdate,
        status: target.checked ? 'done' : 'pending',
      })

      localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }

  const handleDeleteTodo = () => {
    if (!confirm(`Are you sure you want to delete the task: ${todo}?`)) return
    setTodos((todos) => {
      const updatedTodos = todos.filter((_) => _.id !== todo.id)
      localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }

  return (
    <li className={`todo ${status === 'done' ? 'todo-done' : ''}`}>
      <span>{todoText}</span>
      <div className='buttons'>
        <input
          className='icon'
          type='checkbox'
          checked={status === 'done'}
          onChange={handleCheckTodo}
        />
        <button className='icon' onClick={handleDeleteTodo}></button>
      </div>
    </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  setTodos: PropTypes.func,
}
