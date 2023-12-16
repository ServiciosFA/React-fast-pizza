import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header></Header>
      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {isLoading ? <Loader></Loader> : <Outlet></Outlet>}
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
