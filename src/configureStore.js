import { createStore, applyMiddleware, componse } from 'redux';
import { createSagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';


const config = {
  key: 'root',
  storage
};
const reducer = persistReducer(config, rootReducer);

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const getMiddleware = () => applyMiddleware(myRouterMiddleware, sagaMiddleware);

export default function() {
  const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { persistor, store };
}
