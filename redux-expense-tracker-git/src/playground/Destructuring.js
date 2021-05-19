import React from "react";
const Destructuring = () => {
  //Object Destructuring
  //   console.log("Object destructuring");
  //
  //   const person = {
  //     // name: "Andrew",
  //     age: 26,
  //     location: {
  //       city: "Philadelphia",
  //       temp: 92,
  //     },
  //   };
  //   const{name:firstName='Anonymous',age}=person;
  //   console.log(`${firstName} is ${age}.`);
  //   const {city,temp:temperature}=person.location;
  //   if(city&&temperature){
  //       console.log(`It's ${temperature} in ${city}`);
  //   }
  // Object Destructuring Challenge
  // const book={
  //     title:'Ego is the enemy',
  //     author:'Ryan Holiday',
  //     publisher:{
  //         // name:'Penquin'
  //     }
  // }
  // const {name:publisherName="self published"}=book.publisher
  // console.log(publisherName)
  //
  // Array Destructuring
//   console.log("Array destructuring");
//   const address = [];
//   const [, , state='Texas'] = address;
//   console.log(`You are in ${state}`);

const item=['cofee(hot)','$2.00','$2.50','$2.75']
const [menuItem,,mediumPrice,]=item;
// const [menuItem,smallPrice,mediumPrice,largePrice]=item;
console.log(`A medium ${menuItem} costs ${mediumPrice}`)
  return <div>Destructuring</div>;
};

export default Destructuring;
