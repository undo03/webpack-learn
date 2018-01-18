import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



import home from '../reducers/home';
import profile from '../reducers/profile';

const reducers = combineReducers({home,profile});

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const initState = {};

const store = createStore(reducers,initState,enhancer);

export default store;

