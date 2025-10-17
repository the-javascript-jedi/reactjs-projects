import React from "react";
import { v1 as uuid } from "uuid";
import { createStore, combineReducers } from "redux";
// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// REMOVE_EXPENSE - NOT DESTRUCTURED
// const removeExpense = (expense = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id:expense.id
// });
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});
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
// Filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", //date or amount
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // figure out if expenses.description as the text variable string inside it
      // if all below values are true then the item will be kept in the array
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      console.log("sortBy", sortBy);
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("visibleExpenses", visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -211000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Cofee", amount: 300, createdAt: -1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(2125)); //startDate:125
// store.dispatch(setStartDate()); //startDate:undefined
// store.dispatch(setEndDate(999)); //endDate 200
// store.dispatch(setEndDate()); //endDate:undefined
// store.dispatch(setTextFilter("rent"));
const ReduxExpensify = () => {
  const demoState = {
    expenses: [
      {
        id: "demoid",
        description: "January Rent",
        note: "This was the final payment for the address",
        amount: 54500,
        createdAt: 0,
      },
    ],
    filters: {
      text: "rent",
      sortBy: "amount", //date or amount
      startDate: undefined,
      endDate: undefined,
    },
  };
  return <div>ReduxExpensify</div>;
};
export default ReduxExpensify;