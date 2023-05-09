import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui-slice";
import cartReducer from "./reducers/cart-slice";

const store = configureStore({
    reducer: { ui: uiReducer, cart: cartReducer }
});

export default store;