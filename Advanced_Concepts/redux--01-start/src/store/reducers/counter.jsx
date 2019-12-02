import * as actionTypes from "../actions/actionTypes.jsx";
// creating the initial state
const initialState = {
  counter: 0,
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
    case actionTypes.INCREMENT:
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
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
  }
  // on default, it won't return the initial state, but the current state
  // every time the reducer is invoked, it gets the current state
  return state;
};

export default reducer;
