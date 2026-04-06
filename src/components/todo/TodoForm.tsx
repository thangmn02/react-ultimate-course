import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

export default function TodoForm() {
  const [title, setTitle] = React.useState('')
  const { addTodo } = useTodoContext();

  function handleAddTodo() {
    addTodo(title)
  }

  return (
    <div>
      <input type="text" onChange={e => setTitle(e.target.value)} />
      <button type='button' onClick={handleAddTodo}>Add Todos</button>
    </div>
  )
}