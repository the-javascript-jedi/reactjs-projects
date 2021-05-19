import React from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
// import Destructuring from './playground/Destructuring';
// import Redux101 from './playground/Redux101';
// import ReduxExpensify from './playground/ReduxExpensify';
import ConfigureStore from "./store/ConfigureStore";
import getVisibleExpenses from "./selectors/Expenses";
import { addExpense } from "./actions/Expenses";
import { setTextFilter } from "./actions/Filters";
import { Provider } from "react-redux";

const store = ConfigureStore();
// add expense - water bill
store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
// add expense - gas bill
store.dispatch(addExpense({ description: "Gas Bill",createdAt:1000 }));
// add expense - rent bill
store.dispatch(addExpense({ description: "Rent Bill",amount:109500 }));
//  setTextFilter - this filter will display with searched text
// if bill is set 2 values will be displayed
// if water is set only that text is displayed
const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log("visibleExpenses",visibleExpenses);

// console.log(store.getState())
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}
export default App;