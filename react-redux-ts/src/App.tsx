import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
//we export the actionCreators and State type from the common exports folder
//actionCreators-src\state\action-creators\index.ts
//State-src\state\reducers\index.ts
import { actionCreators,State } from './state';
// import reducer type for typescript
function App() {
  const dispatch = useDispatch();
  // get all action creators
  const {depositMoney,withdrawMoney,bankrupt} =bindActionCreators(actionCreators,dispatch);
  // get all state - state specifies the return type
  const amount = useSelector((state:State) => state.bank)
  return (
    <div className="App">
      {/* dispaly the state value */}
      <h1>{amount}</h1>
      {/* dispatch the actions */}
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(500)}>Withdraw</button>
      <button onClick={()=>bankrupt()}>Bankrupt</button>
    </div>
  );
}
export default App;