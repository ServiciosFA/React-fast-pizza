import React from 'react';
import Button from '../../Ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const decreaseHandler = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center  gap-1 md:gap-3">
      <Button type="round" click={decreaseHandler}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" click={increaseHandler}>
        +
      </Button>
    </div>
  );
};

export default UpdateQuantity;
