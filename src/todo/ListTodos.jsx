import { useTodos } from '../context/TodoContext'
import { InputTodo } from './InputTodo'
import { Todo } from './Todo'

export const ListTodos = () => {
  const { todos, deleteAllTodos } = useTodos()

  const handleDeleteTodos = () => {
    if (!confirm('Are you sure you want to delete all tasks?')) return
    deleteAllTodos()
  }

  return (
    <>
      <h1 className='text-center'>Todo App</h1>
      <InputTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
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
