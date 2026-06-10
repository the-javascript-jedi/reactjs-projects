import React,{useState,useEffect} from 'react';
import {Header} from  './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';
import allCharacters from './data/characters.json';
function App() {
  const [items,setItems]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [query,setQuery]=useState('');
  useEffect(()=>{
    const filtered = query
      ? allCharacters.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
      : allCharacters;
    setItems(filtered);
    setIsLoading(false);
  },[query])
  const fnGetSearchQuery= (queryValue)=>{
    setQuery(queryValue);
    console.log('[App.js]-queryValue',queryValue)
  }
  return (
    <div className="container">
      <Header/>
      <Search getSearchQuery={(queryValue)=>fnGetSearchQuery(queryValue)}/>
      <CharacterGrid  isLoading={isLoading} items={items}/>
    </div>
  );
}
export default App;