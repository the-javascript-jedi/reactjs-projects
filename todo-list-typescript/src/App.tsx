import React,{useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'
interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {
  //IState["people"]- we access the people object inside the interface IState
  //people is an array of type interface people
  const [people,setPeople]=useState<IState["people"]>([
    {
      name:"Michael Jordan",
      url:"https://th.bing.com/th/id/OIP.AEOHxOxlgTqyEEuMeBiqAwHaJ7?pid=ImgDet&rs=1",
      age:58,
      note:"The greatest Of All Time"
    }
  ]); 
 
  return (
    <div className="App">
      Add Players To Party         
      <br/>
    <List people={people}/>
    <AddToList/>
    </div>
  );
}

export default App;
