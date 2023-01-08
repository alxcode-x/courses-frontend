import React, { useContext } from 'react'
import classes from './Cart.module.css';
import Modal from '../common/modal/Modal';
import CartItem from './cart-items/CartItem';
import CartContext from '../../store/cart-context';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => { 

     };

     const cartItemAddHandler = (item) => { 

      };

    const cartItems = cartCtx.items.map(
        item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
    );

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {cartItems.length > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart