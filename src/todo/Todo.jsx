import PropTypes from 'prop-types'
import { useTodos } from '../context/TodoContext'

export const Todo = ({ todo }) => {
  const { id, todo: todoText, status } = todo
  const { checkTodo, deleteTodo } = useTodos()

  const handleCheckTodo = ({ target }) => {
    checkTodo(id, target.checked)
  }

  const handleDeleteTodo = () => {
    if (!confirm(`Are you sure you want to delete the task: ${todo.todo}?`))
      return

    deleteTodo(id)
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
