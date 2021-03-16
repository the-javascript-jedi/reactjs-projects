import './App.css';
// import RollDice from './RollDice'
import './Die.css';
import Lottery from './LotteryExercise/Lottery';
function App() {


  return (
    <div className="App">
      {/* dice example */}
      {/* <RollDice/> */}
      {/* Lottery Example */}
      <Lottery/>     
      <Lottery title="Mini Daily" maxNum={10} numBalls={4}/>     
    </div>
  );
}
export default App;
