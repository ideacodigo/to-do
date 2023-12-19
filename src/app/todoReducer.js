export const todoReducer = (initialState, action) => {
   switch (action.type) {
      case '[TODO] Add todo':
         return [...initialState, action.payload];
      case '[TODO] Delete todo':
         return initialState.filter(todo => todo.id !== action.payload);
      case '[TODO] Toggle':
         return initialState.map(todo => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  done: !todo.done,
               }
            }
            return todo;
         });
      case '[TODO] Modify':
         throw new Error('Action.type = ABC no implement');

      default:
         return initialState;
   }
}