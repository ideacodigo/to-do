import React from 'react'

export const TodoItem = ({ todoItem, onDeleteTodo, onToggleTodo }) => {
   const { id, description, done } = todoItem;
   return (
      <>
         <li className='list-group-item d-flex justify-content-between'
            role='button'
            onClick={() => onToggleTodo(id)}>
            <span
               className={`align-self-center ${(done) ? 'text-decoration-line-through' : ''}`}>{description}</span>
            <button
               onClick={() => onDeleteTodo(id)}
               className='btn btn-danger'>Delete</button>
         </li>
      </>
   )
}
