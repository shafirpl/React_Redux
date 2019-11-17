import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";


// redux stuff
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counter.jsx';
import resultReducer from "./store/reducers/results.jsx";

/* 
* here we are combining two different reducer into one single reducer
* The two reducer combined will have one state, so the states from the two reducers will gets merged
* into one single state
*/
const rootReducer = combineReducers({
    ctr: counterReducer,
    result: resultReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
