import React, { useState } from "react";

const MyComponent = () => {
  // input state
  const [name, setName] = useState("");
  // select state
  const [payment, setPayment] = useState("Mastercard");
  // radio button state
  const [shipping, setShipping] = useState("PickUp");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <>
      {/* input */}
      <div>
        <input type="text" onChange={(e) => handleNameChange(e)} />
        <br />
        Name: {name}
      </div>
      {/* select */}
      <div>
        <select
          value={payment}
          onChange={(e) => {
            handlePaymentChange(e);
          }}
        >
          <option value="">Select a Value</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <br />
        <div>{payment}</div>
      </div>
      {/* radio button */}
      <div>
        <label>
          <input
            type="radio"
            value="Delivery"
            onChange={(e) => {
              handleShippingChange(e);
            }}
            checked={shipping == "Delivery"}
          />{" "}
          Delivery
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="PickUp"
            onChange={(e) => {
              handleShippingChange(e);
            }}
            checked={shipping == "PickUp"}
          />{" "}
          Pick Up
        </label>
      </div>
      <div>Shipping: {shipping}</div>
    </>
  );
};
export default MyComponent;
