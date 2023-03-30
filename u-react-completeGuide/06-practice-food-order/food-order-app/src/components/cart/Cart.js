import React, { useContext, useState, Fragment } from 'react'
import useHttpRequest from '../../hooks/useHttpRequest';
import classes from './Cart.module.css';
import Modal from '../common/modal/Modal';
import CartItem from './cart-items/CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './checkout/Checkout';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { sendRequest, isLoading, status } = useHttpRequest();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeitem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    };

    const submitOrderHandler = async (userData) => {
        await sendRequest(
            'https://react-http-test-8f2c7-default-rtdb.firebaseio.com/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items
                })
            }
        );

        setIsSubmitted(true);
    };

    const cartItems = cartCtx.items.map(
        item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)} // bind is used to can passed arguments
                onAdd={cartItemAddHandler.bind(null, item)} />
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {cartItems.length > 0 && <button className={classes.button} onClick={() => setIsCheckout(true)}>Order</button>}
        </div>
    );

    const cartModalContent = (
        <Fragment>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Fragment>
    );

    const sendingOrderModalContent = (
        <Fragment>
            <p>Sending order...</p>
        </Fragment>
    );

    const submittedModalContent = (
        <Fragment>
            <p>The order has been sent!</p>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitted && cartModalContent}
            {isLoading && sendingOrderModalContent}
            {isSubmitted && status.ok && submittedModalContent}
            {isSubmitted && !status.ok && <p>{status.message}</p>}
        </Modal>
    )
}

export default Cart