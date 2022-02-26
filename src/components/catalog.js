import { useSelector } from "react-redux";
import ProductList from "./productList";

function Catalog() {
  const productList = useSelector((state) => state.productList.productList);

  return (
    <div className="Catalog">
      <ProductList products={productList} />
    </div>
  );
}

export default Catalog;
