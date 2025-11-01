import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="App">
      <Header />
      <GlobalProvider>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </GlobalProvider>
    </div>
  );
}
export default App;