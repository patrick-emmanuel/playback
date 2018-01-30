import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { history, configureStore } from './configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';


const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
