// creating the initial state
const initialState = {
    counter: 0
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
            return {
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                counter: state.counter - 1
            };
        case "ADD":
            return {
                counter: state.counter + action.val
            };
        case "SUBTRACT":
            return {
                counter: state.counter - action.val
            };
    }
    return state;
};

export default reducer;