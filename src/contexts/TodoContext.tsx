import React from 'react';

interface ITodo {
  id: string,
  title: string
}

interface TodoContextProps  {
  todos: ITodo[],
  addTodo: (title: string) => void
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {}
});

// WrapperComponent
export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  function addTodo(title: string) {
    const newTodo = {
      id: Math.floor(Math.random() * 100).toString(),
      title
    }
    setTodos(prevState => [...prevState, newTodo])
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => React.useContext(TodoContext)