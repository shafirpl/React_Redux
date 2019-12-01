import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";


// redux stuff
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counter.jsx';
import resultReducer from "./store/reducers/results.jsx";
import ReduxThunk from 'redux-thunk';


// dummy middleware
const logger = (store) => {
    return next => {
        return action => {
            console.log('[MiddleWare] Dispatching', action);
            const result = next(action);
            console.log('[MiddleWare] next state', store.getState());
            return result;
        }
    }
};

/* 
* here we are combining two different reducer into one single reducer
* The two reducer combined will have one state, so the states from the two reducers will gets merged
* into one single state
*/
const rootReducer = combineReducers({
    ctr: counterReducer,
    result: resultReducer
})
// here we are connecing the redux chrome dev tools
/*
* Compose is kind of combine reducers, it allows us to combine
* compose enhancers
* We need to import it from redux
* then we need to wrap the middleware with the compose thing
*/

/*
* Since redux thunk is a middle ware, we add it to composeEnhancers
*/

// to connect to redux dev tools we need this
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,ReduxThunk)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
