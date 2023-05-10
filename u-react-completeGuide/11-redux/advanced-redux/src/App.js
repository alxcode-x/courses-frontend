import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/reducers/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'In progress...',
        message: 'Sending request.'
      }));

      const response = await fetch('https://react-http-test-8f2c7-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed.'
        }));
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    };

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed.'
      }));
    });
  }, [cart]);

  return (
    <Layout>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
