import React from "react";
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';
export const CharacterGrid = ({ items, isLoading }) => {
  // Expanded Version
  if (isLoading === true) {
    return <Spinner/>;
  } else {
    return (
      <section className="cards">
        {items.map((item) => (
        //   <h1 key={item.char_id}>{item.name}</h1>
        <CharacterItem key={item.char_id} item={item}/>
        ))}
      </section>
    );
  }
  //   minified version
  // return isLoading?<h1>Loading...</h1>:<section className="cards">
  //   {
  //   items.map(item=>(
  //       <h1 key={item.char_id}>{item.name}</h1>
  //   )
  //   )
  //   }
  // </section>
};
export default CharacterGrid;