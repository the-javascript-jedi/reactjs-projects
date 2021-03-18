import "./App.css";
// import RollDice from "./DiceExercise/RollDice";
// import Lottery from './LotteryExercise/Lottery';
import CoinContainer from "./CoinFlipperExercise/CoinContainer";
function App() {
  return (
    <div className="App">
      {/* dice example */}
      {/* <RollDice /> */}
      {/* Lottery Example */}
      {/* <Lottery/>     
      <Lottery title="Mini Daily" maxNum={10} numBalls={4}/>      */}
      {/* Coin Flipper Exercise */}
      <CoinContainer />
    </div>
  );
}
export default App;
