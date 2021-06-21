import {useState} from 'react';
import {useQuery} from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles
import {Wrapper} from './App.styles';


// Types 
export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}
// make request to API
const getProducts=async():Promise<CartItemType[]>=>{
  return await (await fetch(`https://fakestoreapi.com/products`)).json();
}
const App=()=> {
  const {data,isLoading,error}=useQuery<CartItemType[]>('products',getProducts);
  
  const getTotalItems=()=>null;

  const handleAddToCart=()=>null;

  const handleRemoveFromCart=()=>null;
  // loading icon
  if(isLoading) return <LinearProgress/>
  // error
  if(error) return <div>Something Went Wrong...</div>
  // console.log("data",data);
  return (
    <div className="App">
      App
    </div>
  );
}
export default App;
