import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../app/todoReducer";

const initialState = []

const init = () => {
   return JSON.parse(localStorage.getItem('todoList')) || [];
}

export const useTodoApp = () => {

   const [todoList, dispatchTodo] = useReducer(todoReducer, initialState, init);

   useEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(todoList) || []);
   }, [todoList])

   const handleNewTodo = (todo) => {
      const action = {
         type: "[TODO] Add todo",
         payload: todo,
      }

      dispatchTodo(action);
   }

   const handleDeleteTodo = (id) => {
      const action = {
         type: "[TODO] Delete todo",
         payload: id,
      }
      dispatchTodo(action);
   }

   const handleToggleTodo = (id) => {
      const action = {
         type: "[TODO] Toggle",
         payload: id,
      }
      dispatchTodo(action);
   }

   return {
      todoList,
      handleNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
      todoCount: todoList.length,
      todoCountPending: todoList.filter(todo => !todo.done).length,
   }
}
