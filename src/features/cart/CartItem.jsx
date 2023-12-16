import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import React from 'react';
import { getCurrentQuantityById } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdateQuantity from './UpdateQuantity';

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li
      key={pizzaId}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        ></UpdateQuantity>
        <DeleteItem pizzaId={pizzaId}></DeleteItem>
      </div>
    </li>
  );
};

export default CartItem;
