import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage
};
const reducer = persistReducer(config, rootReducer);

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const getMiddleware = () => applyMiddleware(myRouterMiddleware, sagaMiddleware);

export default function configureStore() {
  const store = createStore(reducer, composeWithDevTools(getMiddleware()));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
