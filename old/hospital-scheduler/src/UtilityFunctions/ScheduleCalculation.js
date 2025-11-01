const _ = require("lodash");
var daysInAWeek = 7;
var newDoctors = ["n1", "n2", "n3", "n4", "n5", "n6"];
var oldDoctors = ["o1", "o2", "o3", "o4", "o5", "o6"];
const dataExpected = {
  week1: ["n1", "n2", "n3", "o1", "o2", "o3", "o4"],
  week2: ["o5", "o6", "o1", "o2", "n4", "n5", "n6"],
  week3: ["n1", "n2", "n3", "o1", "o2", "o3", "o4"],
  week4: ["o5", "o6", "o1", "o2", "n4", "n5", "n6"],
  week5: ["o3", "o4", "o5", "", "", "", ""],
};
const NumberOfWeeks = 5;
let table = [];
var obj = {};
var NewDoctorsShiftCount = Math.ceil(newDoctors.length / 2); //3
var calendarOP = [];
const calcOddWeeks = () => {
  var oddWeeks = [];
  //choose new doctors from first
  const oddWeekSchedule = newDoctors.slice(0, NewDoctorsShiftCount);
  oddWeeks.push(...oddWeekSchedule);
  for (var i = 0; i < 7; i++) {
    if (oddWeeks.length < daysInAWeek) {
      if (oldDoctors[i] === undefined) {
        // console.log("Need More Doctors");
        oddWeeks.push("Need More Doctors");
      } else {
        oddWeeks.push(oldDoctors[i]);
      }
    }
  }
  return oddWeeks;
};
const calcEvenWeeks = () => {
  var evenWeeks = [];
  //choose new doctors from last
  const evenWeekSchedule = newDoctors.slice(Math.max(newDoctors.length - 3, 0));
  evenWeeks.push(...evenWeekSchedule);
  //fill array with 2 valus from first and last
  var doctorsFillCount = oldDoctors.length / 3;
  // get first 2 elements in array
  var firstFillElements = oldDoctors.slice(0, doctorsFillCount);
  // get last 2 elements of array
  var lastFillElements = oldDoctors.slice(
    Math.max(oldDoctors.length - doctorsFillCount, 0)
  );
  var fillerSchedule = [...lastFillElements, ...firstFillElements];
  fillerSchedule.push(...evenWeeks);
  // evenWeeks.shift(...fillerSchedule);
  return fillerSchedule;
};
const dataOutput = () => {
  for (var i = 1; i <= 5; i++) {
    //week calculator
    if (i % 2 !== 0) {
      obj[`week ${i}`] = calcOddWeeks();
    } else {
      obj[`week ${i}`] = calcEvenWeeks();
    }
  }
  table.push(obj);
  console.log("table[0]", table[0]);
  let newArray = _.flatten(Object.values(table[0]));
  return calendarData(newArray);
};
const getDate = (dayString) => {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
};
function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}
const calendarData = (scheduleInput) => {
  calendarOP = [];
  // console.log("scheduleInput", scheduleInput);
  // { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  for (var i = 0; i < scheduleInput.length; i++) {
    // var index = i < 10 ? (index = "0" + i) : i;
    var dataObj = {
      title: scheduleInput[i],
      start: getDate(`YEAR-02-${minTwoDigits(i + 1)}`),
    };
    calendarOP.push(dataObj);
  }
  console.log("calendarOP--calendarData", calendarOP);
  return calendarOP;
};

export { calcOddWeeks, calcEvenWeeks, dataOutput, getDate, calendarData };
