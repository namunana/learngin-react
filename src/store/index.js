import { createStore, applyMiddleware, compose } from "redux";
// import thunk from 'redux-thunk'
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import todoSaga from './todoSagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
    reducer, 
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(todoSaga)

export  default store;