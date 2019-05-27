import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createStore, { history } from "./store/configureStore";

import routes from './routes';

// const store = configureStore(history, {});

function App() {
  return (
    <Provider store={createStore()}>
      <ConnectedRouter history={history}>
      <div className="App">
        <h1>Hello World!</h1>
        <BrowserRouter>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </BrowserRouter>
      </div>
      </ConnectedRouter>
    </Provider>

  );
}

export default App;
