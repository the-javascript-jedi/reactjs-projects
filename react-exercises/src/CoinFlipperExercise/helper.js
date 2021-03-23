const coinChoice = (coinArr) => {
  let randomIndex = Math.floor(Math.random() * coinArr.length);
  return coinArr[randomIndex];
};
export { coinChoice };
