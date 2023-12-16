import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const navigate = useNavigate();
  //Manejador de error de rutas
  const { error } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <LinkButton to={navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
