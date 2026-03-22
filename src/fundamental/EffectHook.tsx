import React from 'react'

/*
useEffect
- Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
- You can use more than a single effect in a component.
- Important: React runs the effects after every render - including the first render.
- async function

cleanup function useEffect
- Clean up runs after the component re-render or unmounts.
- Clean up runs before method this useEffect
- IMPORTANT: don't run for first render


- first render: render UI with initialize state
- re-render: render UI with new state
data = []
user -> first load page -> react component -> render UI with initialize state -> useEffect -> call api -> set state -> component re-render UI with new state
*/

const awaitTime = (time = 2000) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

function EffectHook() {
  const [count, setCount] = React.useState(1);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect empty dependecy');
    // call api -> set state
    async function fetchTodos() {
      await awaitTime()
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
        .then(res => res.json())
        .then(data => {
          setTodos(data)
        })
    }
    fetchTodos();

    return () => {
      console.log('cleanup useEffect empty dependecy');
    }
  }, []); // once run when component first render

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect no dependecy');

    return () => {
      console.log('cleanup useLayoutEffect no dependecy');
    }
  });

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependecy');

    return () => {
      console.log('cleanup useLayoutEffect with empty dependecy');
    }
  }, []);

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with  dependecy', count);

    return () => {
      console.log('cleanup useLayoutEffect with dependecy');
    }
  }, [count]);

  React.useEffect(() => {
    console.log('useEffect with dependecy', count);

    return () => {
      console.log('cleanup useEffect with dependecy');
    }
  }, [count]); // run every values changes // count 1 - 2


  React.useEffect(() => {
    console.log('useEffect no dependecy');

    return () => {
      console.log('cleanup useEffect no dependecy');
    }
  }); // run every component render - include first render

  function updateCount() {
    setCount(prevState => prevState + 1); // 0 + 1
  }

  console.log('EffectHook render-----------: ')
  return (
    <div>
      <h1>EffectHook</h1> <br />
      Count: {count}<br />
      Todos: {todos.map(todo => (
        <div>
          Title: {todo.title}
        </div>
      ))}
      <br />
      <button type="button" onClick={updateCount}>Update count</button>
    </div>
  )
}

export default EffectHook