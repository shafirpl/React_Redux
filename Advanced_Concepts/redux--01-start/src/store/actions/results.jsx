import * as actionTypes from "./actionTypes.jsx";

export const saveResult = res => {
  const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  return (dispatch, getState) => {
    /*
    * get state function gives us the old state
    * However it is not a good practice to use it like this
    */
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log("Coming from old counter"+oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = res => {
  return {
    type: actionTypes.DELETE_RESULT,
    resElId: res
  };
};
