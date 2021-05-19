import React, { useState } from "react";
import moment from "moment";
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = (props) => {
  //for edit form - form values have to be preloaded
  //so we check if the passed prop singleExpense exists, if the prop exists the data is an existing data because data is passed from as a prop
  //
  let [description, setDescription] = useState(
    props.singleExpense ? props.singleExpense.description : ""
  );
  let [note, setNote] = useState(
    props.singleExpense ? props.singleExpense.note : ""
  );
  let [amount, setAmount] = useState(
    props.singleExpense ? props.singleExpense.amount : ""
  );
  let [errorMsg, setErrorMsg] = useState("");
  // console.log(props.singleExpense.createdAt)
  //const getDateFromTimestampTest=moment(props.singleExpense.createdAt).format("DD MMM YYYY hh:mm a")
  const getDateFromTimestamp = () => {
    let createdAtDate;
    if (props.singleExpense) {
      createdAtDate = props.singleExpense.createdAt;
      // console.log("converted time",moment(createdAtDate).format('L'))
      return createdAtDate;
    } else {
      createdAtDate = Date.now();
      // console.log("converted time",moment(createdAtDate).format('L'))
      return createdAtDate;
    }
  };
  // console.log("getDateFromTimestamp",getDateFromTimestamp())
  const [selectedDate, setSelectedDate] = useState(
    props.singleExpense ? getDateFromTimestamp() : Date.now()
  );
  const now = moment();
  // console.log(now.format("MMM Do YYYY"));
  const onDescriptionChange = (e) => {
    //we have to use the description variable and set the value or use e.persist()
    //alternately we can set the onChange in the element itself like implemented in textArea
    const description = e.target.value;
    setDescription(description);
  };
  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {     
      setAmount(amount);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setErrorMsg("Please provide description and amount");
      // console.log("clicked");
    } else {
      setErrorMsg("");
      // Note:Make sure the submitted object matches the data mapped to the respective action (i.e) it has same name and position
      props.onSubmit({
        description: description,
        note: note,
        amount: parseFloat(amount, 10) * 100,
        createdAt: moment(selectedDate).valueOf(), //date stored as timestamp
      });
      // console.log("submitted");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* description */}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        {/* amount */}
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        {/* date */}      
        {/* onchange we get the date as a parameter and we set the date to state */}
        <Datepicker
          placeholderText="date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}         
          dateFormat="dd/MM/yyyy"         
          isClearable        
          showYearDropdown
          scrollableMonthYearDropdown
        />
        {/* note */}
        <textarea
          placeholder="Add a note for your expense optional"
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></textarea>
        <br />
        {/* displaying dynamically error message */}
        {/* {errorMsg ? <p>{errorMsg}</p> : null} */}
        {errorMsg && <p>{errorMsg}</p>}
        <button>Add Expense</button>
      </form>
    </div>
  );
};
export default ExpenseForm;