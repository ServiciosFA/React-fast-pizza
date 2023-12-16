import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  //Hook para obtener los datos de la funcion loader
  const menu = useLoaderData();

  return (
    <ul className="space-y-2 divide-y divide-stone-200 px-2">
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} pizza={menuItem}></MenuItem>
      ))}
    </ul>
  );
}

//Funcion loader
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
