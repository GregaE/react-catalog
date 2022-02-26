import {
  addProductToBasket,
  removeProductFromBasket,
} from "../redux/productListSlice";
import { useDispatch } from "react-redux";

function Product({ id, img, name, price, category, inBasket }) {
  const dispatch = useDispatch();

  return (
    <div className="Product">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="product-info">
        <h2>{name}</h2>
        <div>€ {price}</div>
      </div>
      <div className="btn-container">
        {inBasket ? (
          <button
            className="danger"
            onClick={function () {
              dispatch(removeProductFromBasket(id));
            }}
          >
            Remove from basket
          </button>
        ) : (
          <button
            onClick={function () {
              dispatch(addProductToBasket(id));
            }}
          >
            Add to basket
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
