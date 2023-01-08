import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => { 
    if(action.type === 'ADD'){
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'REMOVE'){

    }

    return defaultCartState;
 };

function CartProvider(props) {
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => { 
        dispatchCartAction({type: 'ADD', item: item});
     };

    const removeItemFromCartHandler = (itemId) => { 
        dispatchCartAction({type: 'REMOVE', id: itemId});
     };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeitem: removeItemFromCartHandler
    };

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider