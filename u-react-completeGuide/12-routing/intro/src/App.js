import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> }
    ]
  }
  // we can add more here
  // {
  //   path: '/',
  //   element: <Root />,
  //   children: [
  //     { path: '/', element: <Home /> },
  //     { path: '/products', element: <Products /> }
  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
