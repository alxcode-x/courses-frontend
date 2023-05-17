import { uiActions } from '../reducers/ui-slice'
import { cartActions } from '../reducers/cart-slice';

const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-test-8f2c7-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Fetching cart data failed.');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.getItems({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
            }));
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    };
};

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
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                })
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
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
    };
};

export {
    fetchCartData,
    sendCartData
}