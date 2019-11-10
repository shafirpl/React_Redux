import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
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
*/

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

/*
* this is creating the dispatch
* behind the scene this will call store.dispatch function
* remember to pass the action type
*/

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
      onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
      onAddCounter: () => dispatch({ type: "ADD", val: 5 }),
      onSubstractCounter: () => dispatch({ type: "SUBTRACT", val: 5})
    };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);