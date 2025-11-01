// Expenses Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_EXPENSE":
      console.log("ADD_EXPENSE called");
      // returning using array.concat
      // return state.concat(action.expense);
      // returning using spread
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      console.log("EDIT_EXPENSE", action.id, action.updates);
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
export default expensesReducer;