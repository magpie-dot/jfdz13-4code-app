import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import animals from './state/animals'
import users from './state/users'

const reducers = combineReducers({
    animals,
    users
});

const logger = store => next => action => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result
};

const middleware = applyMiddleware(logger, thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(reducers, enhancer);

export default store;