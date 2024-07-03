import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantSelected: '',
    categorySelected:'',
    dishSelected:''
}

const restaurantSlice=createSlice({
    name:'restaurant',
    initialState,
    reducers:{
        selectRestaurant(state,action) {
            state.restaurantSelected = action.payload;
            console.log(state.restaurantSelected);
        },
        selectCategory(state,action) {
            state.categorySelected= action.payload;
            console.log(state.categorySelected);
        },
        selectDish(state,action){
            state.dishSelected=action.payload;
            console.log(state.dishSelected);

        }
        

    }
})
export const restaurantActions= restaurantSlice.actions;
export default restaurantSlice;