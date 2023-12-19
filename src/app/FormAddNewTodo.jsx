import React from 'react'
import { useForm } from '../hooks/useForm'

export const FormAddNewTodo = ({ onNewTodo }) => {

   const { description, onInputChange, onClickReset } = useForm({ description: '' });

   const handleSubmit = (e) => {
      e.preventDefault();

      if (description.length <= 2) return;

      const newTodo = {
         id: new Date().getTime(),
         description: description,
         done: false
      }

      onNewTodo(newTodo);

      onClickReset();
   }

   return (
      <>
         <form action="" onSubmit={handleSubmit}>
            <input
               type="text"
               name='description'
               value={description}
               onChange={onInputChange}
               placeholder='activity'
               className='form-control mb-2'
               required />

            {
               (description.length < 3 && description.length > 0) && <div className='alert alert-success'>Min 3 characters</div>
            }

            <button
               className='btn btn-primary w-100'
            >Add</button>
         </form>
      </>
   )
}