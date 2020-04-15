import React from 'react';
import routes from './routes';
import { Link, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>

      {routes.map((value, key) => {
        return <Route
          key={key}
          path={value.path}
          component={value.component}
          exact={value.exact}
        ></Route>
      })}

    </div>
  );
}