import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ children, disabled, to, type, click }) => {
  const base =
    'inline-block rounded-full bg-yellow-400 text-stone-800 font-semibold uppercasetext-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:outline-none  focus:ring focus:ring-yellow-400 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'md:px-5 md:py-2.5 py-2 px-4 sm:px-4 sm:py-2 text-xs',
    round: base + 'md:px-3.5 py-1 px-2.5 text-sm',
    secondary:
      'text-stone-400 inline-block rounded-full border-2 border-stone-300  font-semibold uppercasetext-stone-800 transition-colors duration-300  hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none  focus:ring focus:ring-stone-400 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5',
  };
  if (to)
    return (
      <NavLink to={to} className={styles[type]}>
        {children}
      </NavLink>
    );

  if (click)
    return (
      <button onClick={click} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
