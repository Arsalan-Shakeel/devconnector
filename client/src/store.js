import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
	applyMiddleware(...middleware)
	// other store enhancers if any
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;

//Code was taken from this link -
//https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
//https://github.com/zalmoxisus/redux-devtools-extension/issues/320
