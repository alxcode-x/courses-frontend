import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } 
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId)
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items.pop(existingItem);
            } 
            else {
                existingItem.quantity--; 
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;