import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartNumber :0,
    cart:[],
    totalAmount:0
}
const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
incrementCart(state){
    state.cartNumber++;
    console.log(state.cartNumber)
},
addToCart(state,action){
    console.log(action.payload);
    const {item}= action.payload;
    const existingItem = state.cart.find((cartItem)=>cartItem.id === item.id);
    if(existingItem){
        existingItem.quantity++;
    }else {
        state.cart.push({...item,quantity:1});
    }
    state.totalAmount += item.price;
    state.cartNumber++;
},
    // const existingItemIndex =state.cart.findIndex((cartItem)=>cartItem.id===item.id);
    // if(existingItemIndex !==-1){
    //     state.cart[existingItemIndex].quantity++;
    // }else{
    //     state.cart.push({...item, quantity:1});
    // }
    // state.totalAmount+=item.price;
    // state.cartNumber++;
    // console.log(state.cart);
    // },
decrementCart(state){
 state.cartNumber = Math.max(0, state.cartNumber - 1);
},
removeFromCart(state,action){
        console.log(action.payload);
    const {item}= action.payload;
    const existingItemIndex= state.cart.findIndex((cartItem)=>cartItem.id===item.id);
    if(existingItemIndex!==-1){
       const existingItem = state.cart[existingItemIndex];
       existingItem.quantity = Math.max(0,existingItem.quantity - 1);
       if(existingItem.quantity === 0){
        state.cart.splice(existingItemIndex,1);
       }
    }
    state.totalAmount-=item.price;
    state.cartNumber= Math.max(0, state.cartNumber-1);
    }
    }})

export const cartActions = cartSlice.actions;
export default cartSlice;