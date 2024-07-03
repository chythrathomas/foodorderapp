import { configureStore } from "@reduxjs/toolkit";
// import modalSlice from "./ModalSlice";
import restaurantSlice from "./restaurantSlice";
import cartSlice from "./cartSlice";


// import foodListSlice from "./foodListSlice";



export const store = configureStore({
    reducer:{
        restaurant:restaurantSlice.reducer,
    cart:cartSlice.reducer},
});