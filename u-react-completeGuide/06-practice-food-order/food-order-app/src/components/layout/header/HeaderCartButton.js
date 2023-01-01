import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../common/cartIcon/CartIcon';

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span> 
        <span>Your Cart</span> 
        <span className={classes.badge}>3</span> 
    </button>
  );
}

export default HeaderCartButton