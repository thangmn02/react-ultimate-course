import { useTodoContext } from '../../contexts/TodoContext';

export default function TodoList() {
  const { todos } = useTodoContext();

  console.log('TodoList: ', todos)

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>Title: {todo.title}</li>
        ))}
      </ul>
    </>
  )
}