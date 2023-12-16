import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as patchOder } from './features/order/UpdateOrder';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Home from './Ui/Home';
import Error from './Ui/Error';
import AppLayout from './Ui/AppLayout';

/*<Routes>
        <Route index element={<User></User>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="menu" element={<Menu></Menu>}></Route>
        <Route path="order" element={<Order></Order>}></Route>
        <Route path="order/new" element={<CreateOrder></CreateOrder>}></Route>
        <Route path="order/:orderID" element={<OrderItem></OrderItem>}></Route>
      </Routes>*/

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: patchOder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
