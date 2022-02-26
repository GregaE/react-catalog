import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Catalog from "./components/catalog";
import Basket from "./components/basket";

function App() {
  const navigate = useNavigate();
  const productList = useSelector((state) => state.productList.productList);
  const basketProductList = productList.filter((product) => product.inBasket);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/basket")}>Basket</button>
      </header>
      <main className="dashboard">
        <div className="basket-info">
          <div>
            <div>No of items</div>
            <div>{basketProductList.length}</div>
          </div>
          <div>
            <div>Total price</div>
            <div>€ {renderTotalPrice(basketProductList)}</div>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Catalog />} />
          <Route path="/basket" exact element={<Basket />} />
        </Routes>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

function renderTotalPrice(list) {
  if (list.length > 0) {
    return list
      .filter((product) => product.inBasket)
      .map((product) => product.price)
      .reduce(function (prev, curr) {
        return (prev * 100 + curr * 100) / 100;
      });
  } else {
    return 0;
  }
}

export default App;
