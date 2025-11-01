import "./App.css";
import WithSearchHOC from "./components/WithSearchHOC";
import ProductsList from "./components/ProductList";
function App() {
  const ProductsListWithSearch = WithSearchHOC(ProductsList);
  return (
    <div className="App">
      <ProductsListWithSearch />
    </div>
  );
}
export default App;
