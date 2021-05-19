import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/Filters";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseListFilters = (props) => {
  console.log("props", props);
  // if no date is selected set the start date as start of month using moment
  const [selectedStartDate, setSelectedStartDate] = useState(
    moment().startOf("month").valueOf()
  );
  // if no date is selected set the end date as end of month using moment
  const [selectedEndDate, setSelectedEndDate] = useState(
    moment().endOf("month").valueOf()
  );

  const sortSelectedStartDate = (date) => {
    console.log("sortSelectedStartDate", date);
    setSelectedStartDate(date);
    props.dispatch(setStartDate(date));
    //  props.dispatch(setStartDate(1596240000));
  };
  const sortSelectedEndDate = (date) => {
    console.log("sortSelectedEndDate", date);
    setSelectedEndDate(date);
    props.dispatch(setEndDate(date));
  };

  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          console.log(e.target.value);
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount());
          }
          //   props.dispatch(setTextFilter(e.target.value));
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <br />
      <b>Search by Start Date or End Date</b>
      {/* Start Date */}
      <label>Start Date</label>
      {/* onchange we get the date as a parameter and we set the date to state */}
      <Datepicker
        placeholderText="start date"
        selected={selectedStartDate}
        onChange={(date) => {
          sortSelectedStartDate(date);
        }}
        // we can pass the required date format as a string
        dateFormat="dd/MM/yyyy"
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
      {/* End Date */}
      <label>End Date</label>
      <Datepicker
        placeholderText="End date"
        selected={selectedEndDate}
        onChange={(date) => {
          sortSelectedEndDate(date);
        }}
        // we can pass the required date format as a string
        dateFormat="dd/MM/yyyy"
        // using isClearable prop the selected date can be cleared
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);