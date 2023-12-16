import LinkButton from '../../Ui/LinkButton';
import Button from '../../Ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart></EmptyCart>;

  const clearHandler = (e) => {
    dispatch(clearCart());
  };
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-x1 mt-7 font-semibold">Your cart, {username}</h2>
      <ul className=" mt-3 flex flex-col justify-center divide-y divide-stone-200 border-b">
        {cart.map((item, i) => (
          <CartItem item={item} key={item.pizzaId}></CartItem>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" click={clearHandler}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
