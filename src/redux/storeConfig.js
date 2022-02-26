import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./productListSlice";

export default configureStore({
  reducer: {
    productList: productListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
