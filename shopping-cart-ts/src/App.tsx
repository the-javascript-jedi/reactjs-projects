import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
//Components-Material
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles
import { Wrapper, StyledButton } from './App.styles';


// Types 
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
// make request to API
const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch(`https://fakestoreapi.com/products`)).json();
}
const App = () => {
  // state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  //alternate array declaration
  // const [cartItems,setCartItems]=useState<CartItemType[]>([])

  // data from API using react-query
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  // use reduce and get the total items 
  //ack is the acumulator which will return the total items
  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev=>{      
      // 1.Is the item already added in the cart
      const isItemInCart=prev.find(item=>item.id===clickedItem.id);
      // if item is present in cart we need to update the amount(quantity of items) on the specific item else we simply return the item
      if(isItemInCart){
        return prev.map(item=>item.id===clickedItem.id ? {...item,amount:item.amount+1} : item)
      }
      // First Time the Item is added, we spread previous state and add existing data in the curly brackets but only increment the amount by 1
      return [...prev,{...clickedItem,amount:1}]
    })
  };

  const handleRemoveFromCart = (id:number) => {    
      setCartItems(prev=>{
      return prev.reduce((ack,item)=>{
        // check if item is already exists in array
        if(item.id===id)  {
          // we remove from the array because we skip it and the item is deleted from array
          if(item.amount===1) return ack;
          // if amount is not 1 we spread the accumulator and item and for the specific item.id reduced by -1 
          return [...ack,{...item,amount:item.amount-1}];
        }else{
          return [...ack,item];
        }
      },[] as CartItemType[])
    }
    )
  };
  // loading icon
  if (isLoading) return <LinearProgress />
  // error
  if (error) return <div>Something Went Wrong...</div>
  // console.log("data",data);
  return (
    <Wrapper>
      {/* Drawer is the side bar using Material UI */}
      {/*open-true means cart will be displayed, onClose  */}
      {/* onClose specifies the modal close */}
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>            
          </Grid>
        )))}
      </Grid>

    </Wrapper>
  );
}
export default App;
