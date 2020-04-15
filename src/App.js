import React from 'react';
import routes from './routes';
import { Route } from 'react-router-dom';
import './pages/css/global.css';
import Toolbar from './pages/components/toolbar/Toolbar';

export default function App() {
  return (
    <div>

      <Toolbar/>

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