import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
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
        removeItem(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId)
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items.pop(existingItem);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

const cartActions = cartSlice.actions;

const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'In progress...',
            message: 'Sending request.'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-test-8f2c7-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    }
};

export default cartSlice.reducer;
export {
    cartActions,
    sendCartData,
}