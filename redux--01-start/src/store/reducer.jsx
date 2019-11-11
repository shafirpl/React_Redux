// creating the initial state
const initialState = {
    counter: 0,
    results: []
}

// reducer
/*
* The reducer is a stricly a function, which receives two
* argument, the current state/old state and the action 
* It must return a state, for the time being we will just 
* return the old state
* like python, we can define a default value if current state is
* not passed or undefined.
* usually when we dispatch an action, we check for the type and
* then decide what action to take
*/

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            /*
            * this will copy everything from the old state, but 
            * change the counter, make a new javascript  with
            * those data
            * and then return it. This is the way to return 
            * a state in redux, we want a new javascript object, not 
            * the old object
            * This is the preferred way to return a new state in redux
            * As it ensures an immutable way to update the state
            */
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.val
            };
        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.val
            };
        case 'STORE_RESULT':
            return {
                ...state,
                /*
                * We need to update the state in an immutable way,
                * which means we shouldn't touch the original results, but
                * create a new reults array. Concat create a new results array
                * based on the old value, and adds a new value to that new array
                * that was passed to its argument
                * Or another way to say, concat returns a new array, which is the 
                * old array values plus another new value that we add to the argument
                * We shouldn't use push, as push touches the old array. We always
                * creates new object and then return it
                */
                results: state.results.concat({id:new Date(), value: state.counter})
            }
    }
    // on default, it won't return the initial state, but the current state
    // every time the reducer is invoked, it gets the current state
    return state;
};

export default reducer;