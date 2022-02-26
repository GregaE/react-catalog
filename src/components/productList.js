import Product from "./product";

function ProductList({ products }) {
  function renderProducts(list) {
    return list.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          category={product.category}
          inBasket={product.inBasket}
        />
      );
    });
  }

  return <div className="ProductList">{renderProducts(products)}</div>;
}

export default ProductList;
