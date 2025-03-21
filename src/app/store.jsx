import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '/src/app/userReducer';
import { productsApi } from "./apiSlice";
import { imagesApi } from "./imageSlice";

export const store = configureStore({
    reducer: {
        users: UserReducer, 
        [productsApi.reducerPath]: productsApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, imagesApi.middleware),
});
export default store;