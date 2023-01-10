import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../common/cartIcon/CartIcon';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const cartCtx = useContext(CartContext);
  const amountItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setButtonClicked(true);

    const timer = setTimeout(() => {
      setButtonClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  },[cartCtx.items]);

  const buttonClasses = `${classes.button} ${buttonClicked ? classes.bump : ''}`;
  return (
    <button className={buttonClasses} onClick={props.onClickCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span> 
        <span>Your Cart</span> 
        <span className={classes.badge}>{amountItems}</span> 
    </button>
  );
}

export default HeaderCartButton;