import React, { useRef } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length >= 5;

function Checkout(props) {
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const nameIsValid = !isEmpty(nameRef.current.value) && isFiveChars(nameRef.current.value);
        const streetIsValid = !isEmpty(streetRef.current.value) && isFiveChars(streetRef.current.value);
        const postalIsValid = !isEmpty(postalRef.current.value) && isFiveChars(postalRef.current.value);
        const cityIsValid = !isEmpty(cityRef.current.value) && isFiveChars(cityRef.current.value);

        const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if(!formIsValid){
            return;
        }

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout