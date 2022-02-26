import { useSelector } from "react-redux";
import ProductList from "./productList";

function Basket() {
  const productList = useSelector((state) => state.productList.productList);

  return (
    <div className="Basket">
      <ProductList
        products={productList.filter((product) => product.inBasket)}
      />
    </div>
  );
}

export default Basket;
