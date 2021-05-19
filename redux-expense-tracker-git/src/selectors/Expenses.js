import moment from 'moment';
// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      console.log("startDate",startDate)
      const createdAtMoment=moment(expense.createdAt);
      const startDateMatch = startDate?moment(startDate).isSameOrBefore(createdAtMoment,'day'):true;
      const endDateMatch = endDate?moment(endDate).isSameOrAfter(createdAtMoment,'day'):true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // figure out if expenses.description as the text variable string inside it
      // if all below values are true then the item will be kept in the array
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      console.log("sortBy", sortBy);
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
      // else{
      //   return false
      // }
    });
};
export default getVisibleExpenses;
