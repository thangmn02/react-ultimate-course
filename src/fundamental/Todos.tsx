import React from 'react';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

export default function Todos() {
  return (
    <>
      <TodoForm />

      <TodoList />
    </>
  )
}