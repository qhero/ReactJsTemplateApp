import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from './routes';

// const store = configureStore(history, {});

function App() {
  return (
        <BrowserRouter>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </BrowserRouter>

  );
}

export default App;
