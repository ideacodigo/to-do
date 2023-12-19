import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TodoApp } from './app/TodoApp';

export const ToDoApp = () => {
  return (
    <div className='container pt-2'>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </div>
  )
}
