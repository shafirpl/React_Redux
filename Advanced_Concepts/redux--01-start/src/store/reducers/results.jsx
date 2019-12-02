import * as actionTypes from "../actions/actionTypes.jsx";
// creating the initial state
const initialState = {
  results: []
};

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
 *
 * Usually if I recall from colt's videos, when handling state, we
 * usually don't do direct update/delete on a state. Most of the time
 * we create a copy of the existing state, change the required property
 * in that object containing existing state, and then make that object
 * the new state, or equal the state to that new object
 * this is what is called chaning state immutubly
 *
 * When we do return/pass a new object, it automatically updates the
 * central store
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
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
        /*
        * After combining reducer, this reducer only has access to the results, not the counter
        * Also from reducer, since it is not directly connected to central store, we cannot have access
        * to the counter. So in order to have access to counter, we need to get it as a payload. Since counter.js file
        * has access to global state, we pass it from there the counter state to it as payload
        */
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // read this
      // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#questions
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  // on default, it won't return the initial state, but the current state
  // every time the reducer is invoked, it gets the current state
  return state;
};

export default reducer;
