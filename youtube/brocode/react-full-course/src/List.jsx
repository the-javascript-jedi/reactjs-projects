import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  //   ALPHABETICAL SORT
  fruits.sort((a, b) => a.name.localeCompare(b.name));
  //  REVERSE ALPHABETICAL SORT
  fruits.sort((a, b) => b.name.localeCompare(a.name));
  //  NUMERIC SORT ASCENDING
  fruits.sort((a, b) => a.calories - b.calories);
  //  NUMERIC SORT DESCENDING
  fruits.sort((a, b) => b.calories - a.calories);
  // FILTER ARRAY
  const lowCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name}:&nbsp;</li>
  ));

  const highCalFruits = lowCalFruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name}:&nbsp;</li>
  ));

  return (
    <>
      <p>All Fruits</p>
      <ol>{listItems}</ol>;
      <br />
      <p>High Calory Fruits</p>
      <ol>{highCalFruits}</ol>
    </>
  );
};

export default List;
