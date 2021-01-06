// to provide store to react application we use the provider using react-redux library
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    // we pass the created store to the provider using the prop store
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* 
        // we pass in cake as a prop
        <ItemContainer cake />
        <ItemContainer iceCream />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}
export default App;
