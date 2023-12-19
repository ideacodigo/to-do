import React from 'react';
import { useTodoApp } from '../hooks';
import { FormAddNewTodo } from './FormAddNewTodo';
import { TodoList } from './TodoList';

export const TodoApp = () => {

   const { todoList, handleNewTodo, handleDeleteTodo, handleToggleTodo, todoCount, todoCountPending } = useTodoApp();

   return (
      <div className='container'>
         <div className="row">
            <div className="col-12 col-md-6 offset-0 offset-md-3 pt-5">
               <h1 className='text-center'>TODO APP</h1>
               <p className='text-secondary'> ALL TODO LIST: ({todoCount}) - <span>PROGRESS: ({todoCountPending})</span></p>

               <div>
                  <TodoList
                     todoList={todoList}
                     onDeleteTodo={handleDeleteTodo}
                     onToggleTodo={handleToggleTodo}
                  />
               </div>

               <div className="my-2 text-center">
                  <h4>ADD TODO</h4>
                  <FormAddNewTodo onNewTodo={handleNewTodo} />
               </div>

               <figure>
                  <blockquote className="blockquote">
                     <p>Las ideas no valen nada si no van acompañadas por una puesta en práctica.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                     Someone famous <cite title="Source Title">in life.</cite>
                  </figcaption>
               </figure>

            </div>
         </div>
      </div>
   )
}