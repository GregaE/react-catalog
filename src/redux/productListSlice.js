import { createSlice } from "@reduxjs/toolkit";
import catalogue from "../db-mock/db-mock";

const newProductList = catalogue.map((product) => ({
  ...product,
  inBasket: false,
}));

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    productList: [...newProductList],
  },
  reducers: {
    setProductsToCatalog: (state, action) => {
      state.productList = action.payload;
    },
    addProductToBasket: (state, action) => {
      const selectedProduct = state.productList.find(
        (product) => product.id === action.payload
      );
      selectedProduct.inBasket = true;
    },
    removeProductFromBasket: (state, action) => {
      const selectedProduct = state.productList.find(
        (product) => product.id === action.payload
      );
      selectedProduct.inBasket = false;
    },
  },
});

export const {
  setProductsToCatalog,
  addProductToBasket,
  removeProductFromBasket,
} = productListSlice.actions;
export default productListSlice.reducer;
