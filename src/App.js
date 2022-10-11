import React, { useEffect } from 'react';
import { gapi } from 'gapi-script'
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import routes from './routes';
import LayoutApp from './features/shared/components/LayoutApp';
import { PrivateRoute, PublicRoute } from './app/helper';

function App() {

  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientId: process.env.REACT_APP_CLIENT_ID,
    //     scope: ''
    //   })
    // }
    // gapi.load('client:auth2', start)
    // const token = gapi.auth.getToken().access_token
    // console.log(token)
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, element, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                isPrivate ?
                  <PrivateRoute>
                    <LayoutApp>{element}</LayoutApp>
                  </PrivateRoute>
                  :
                  <PublicRoute>{element}</PublicRoute>
              }
            />
          ))
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
