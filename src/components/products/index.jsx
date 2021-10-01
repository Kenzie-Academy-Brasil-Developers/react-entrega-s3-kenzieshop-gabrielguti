import { useSelector } from "react-redux";
import Product from "../product";
const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className = 'list'>
      {products.map((item, index) => (
        <Product key={index} product={item} />
      ))}
    </div>
  );
};

export default Products;
