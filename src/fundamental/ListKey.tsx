import React from 'react';

interface Todo {
  title: string,
  status: string,
  id: string
}

function ListKey() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    console.log('useEffect ListKey')
    const data = [
      { title: 'react', status: 'new' },
      { title: 'javascript', status: 'new' }
    ]
    const dataMapping = data.map((data, index) => ({
      ...data,
      id: data.title + index
    }))
    setTodos(dataMapping);
  }, []);

  const listTodos = todos.map(todo => (
    <div key={todo.id}>
      Title: {todo.title}
    </div>
  ))
  
  console.log('ListKey render', {
    todos,
    listTodos
  })

  return (
    <div>
      <h1>List Key</h1>
      {todos.map(todo => (
        <div key={todo.id} className='button'>Title: {todo.title}</div>
      ))}

      {listTodos}
    </div>
  )
}

export default ListKey