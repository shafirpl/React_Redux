/*
* Here we are using node js to run the file
*/

// dummy initial state, a javascript object

const initialState = {
    counter: 0
}

// reducer
/*
* The root reducer is a stricly a function, which receives two
* argument, the current state/old state and the action 
* It must return a state, for the time being we will just 
* return the old state
* like python, we can define a default value if current state is
* not passed or undefined.
* usually when we dispatch an action, we check for the type and
* then decide what action to take
*/
const rootReducer = (current_state = initialState, action) => {
    // defining action types
    if (action.type === 'INC_COUNTER'){
        // using spread operator and then overwrite the property 
        // we need, we never do something++ or something like that
        // we always return a new object
        return {
            ...current_state,
            counter: current_state.counter + 1
        }
    }
        if (action.type === "ADD_COUNTER") {
          return {
            ...current_state,
            counter: current_state.counter + action.value
          };
        }
    return current_state;
}

// store
const redux = require('redux');
const createStore = redux.createStore;


// creating the central store
/*
* central store always needs a root reducer when we are creating it
*/
const store = createStore(rootReducer);
console.log(store.getState());

// usually we write subscription after the store creation method
// it gets triggered whenever an action is dispatched, which triggers
// the reducer to run and update the state
// Subscription
store.subscribe(() => {
    console.log('[Subscription]: ',store.getState())
});




// Dispatching Action
/*
* in action, we must define the type
* Usually we define type in all uppercase, and it should be 
* short but descriptive
* The type tells the reducer what actions need to be taken
* It has to be a javascript object, that is where {} comes in
*
*/
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({ type: "ADD_COUNTER" , value: 10});
console.log(store.getState());

