import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from '../../store/actions/actions.jsx';
import './Counter.css';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions.jsx/index.js';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
          <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl
              label="Increment"
              clicked={this.props.onIncrementCounter}
            />
            <CounterControl
              label="Decrement"
              clicked={this.props.onDecrementCounter}
            />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl
              label="Subtract 5"
              clicked={this.props.onSubstractCounter}
            />
            <hr />
            <button
              className="btn btn-success"
              onClick={() => this.props.onStoreResult(this.props.ctr)}
            >
              Store Result
            </button>
            <ul className="list-group">
              {this.props.storedResults.map(strResult => (
                <li
                  className="list-group-item"
                  key={strResult.id}
                  // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8211868#questions
                  // watch from 7:16
                  onClick={() => this.props.onDeleteResult(strResult.id)}
                >
                  {strResult.value}
                </li>
              ))}
            </ul>
          </div>
        );
    }
}

/*
* we passes two pieces of argument to this connect.
* 1. which part of the application state we need in this component
* for complex app we might have a lot of data in application state,
* so passing the whole state is not ideal
* 2. Which actions do I want to dispatch
*/
/*
* the state argument here is the application state, we receive the whole application
* state but then using .property_name only retrieves slices of state that is relevant to this
* component
*
* the props method will have access to this. For example, if 
* i want to access the storedResults, I would do props.storedResults
*/

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.result.results
    };
}

/*
* this is creating the dispatch
* behind the scene this will call store.dispatch function
* remember to pass the action type
*
* For onStoreResult, we don't need to pass the counter value
* as in the reducer we can access the counter, so passing is unnecessary

*/

const mapDispatchToProps = dispatch => {
    return {
      // here we are passing action as javascript object inside the dispatch function
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
        onSubstractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
        /*
        * now after using reducer combination, we no longer have access to the counter state inside
        * the results reducer. Results reducer only has access to the results, not the counter
        * So we need to pass the counter state as an action payload to it
        * so we need to pass the state to our reducer as payload
        */
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id})
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);