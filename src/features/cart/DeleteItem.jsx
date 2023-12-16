import React from 'react';
import Button from '../../Ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" click={deleteHandler}>
      Delete
    </Button>
  );
};

export default DeleteItem;
