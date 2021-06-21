import {useState} from 'react';
import {useQuery} from 'react-query';
// Components
import Item from './Item/Item';
//Components-Material
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles
import {Wrapper,StyledButton} from './App.styles';


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
  // state
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItems,setCartItems]=useState([] as CartItemType[])
  //alternate array declaration
  // const [cartItems,setCartItems]=useState<CartItemType[]>([])

  // data from API using react-query
  const {data,isLoading,error}=useQuery<CartItemType[]>('products',getProducts);
  
  const getTotalItems=(items:CartItemType[])=>null;

  const handleAddToCart=(clickedItem:CartItemType)=>null;

  const handleRemoveFromCart=()=>null;
  // loading icon
  if(isLoading) return <LinearProgress/>
  // error
  if(error) return <div>Something Went Wrong...</div>
  // console.log("data",data);
  return (
    <Wrapper>
      {/* Drawer is the side bar using Material UI */}
      {/*open-true means cart will be displayed, onClose  */}
      {/* onClose specifies the modal close */}
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
      <p>Cart goes here</p>
      </Drawer>
      <StyledButton onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item=>(
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}> 

            </Item>
          </Grid>
        )))}
      </Grid>
      
    </Wrapper>
  );
}
export default App;
