import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList = [], onDeleteTodo, onToggleTodo }) => {


   return (
      <>

         {
            todoList.length == 0 &&
            <div className="alert alert-info" role="alert">
               There not TODO!
            </div>
         }

         <ul className='list-group'>
            {
               todoList.map((todoItem) => (
                  <TodoItem
                     key={todoItem.id}
                     todoItem={todoItem}
                     onToggleTodo={onToggleTodo}
                     onDeleteTodo={onDeleteTodo} />
               ))
            }
         </ul>

      </>
   )
}
