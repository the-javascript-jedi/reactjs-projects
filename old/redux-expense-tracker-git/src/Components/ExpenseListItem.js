import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/Expenses";
import { Link } from "react-router-dom";
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3> {description}</h3>
      </Link>
      <p>
        {amount}-{createdAt}
      </p>
      <button
        onClick={() => {
          // console.log(props.id)
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStateToProps)(ExpenseListItem);