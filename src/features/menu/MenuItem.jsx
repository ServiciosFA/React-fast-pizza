import { formatCurrency } from '../../utils/helpers';
import Button from '../../Ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateQuantity from '../cart/UpdateQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currencyQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currencyQuantity > 0;

  const additemHandler = () => {
    if (!soldOut)
      dispatch(
        addItem({
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
        }),
      );
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opactity-70 grayscale' : ''}`}
      />
      <div className="space flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center justify-between sm:gap-6">
              <UpdateQuantity
                pizzaId={id}
                currentQuantity={currencyQuantity}
              ></UpdateQuantity>
              <DeleteItem pizzaId={id}></DeleteItem>
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" click={additemHandler}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
