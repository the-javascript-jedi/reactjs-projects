import ProductCard from "./ProductCard";
import { products } from "../data/data";

const ProductsList = (props) => {
  // searchTerm is coming from HOC
  const { searchTerm } = props;

  //filter the products based on a concatenated string value
  const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    return products.filter((product) => {
      let str =
        `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    });
  };

  let filteredProducts = filterProducts(searchTerm);
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductsList;
