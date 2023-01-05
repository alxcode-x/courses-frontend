import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../common/cartIcon/CartIcon';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const amountItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span> 
        <span>Your Cart</span> 
        <span className={classes.badge}>{amountItems}</span> 
    </button>
  );
}

export default HeaderCartButton