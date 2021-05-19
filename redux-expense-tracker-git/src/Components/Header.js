import React from 'react';
import { NavLink } from "react-router-dom";
  
    const Header = () => {
        return (
            <header>
            <h1>Expense Tracker</h1>
            <NavLink activeClassName="is-active" exact={true} to="/">
              Dashboard
            </NavLink>
            <NavLink activeClassName="is-active" to="/create">
              Create Expenses
            </NavLink>
            <NavLink activeClassName="is-active" to="/edit">
              Edit Expenses
            </NavLink>
            <NavLink activeClassName="is-active" to="/help">
              Help
            </NavLink>
          </header>
        )
}
export default Header