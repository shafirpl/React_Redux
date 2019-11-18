import React, { Component } from "react";

import "./AddPerson.css";

class addPerson extends Component {

    state = {
        name: '',
        age: ''
    }
    namechangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }
    render() {
        return (
            <div className="AddPerson">
                <button
                    className="btn btn-lg btn-primary"
                    onClick={() => this.props.personAdded(this.state.name,this.state.age)}
                >
                    Add Person
        </button>
                <div class="input-group mt-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {this.namechangedHandler}
                        value = {this.state.name}
                    />
                </div>
                <div class="input-group mt-3">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Age"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange = {this.ageChangedHandler}
                        value = {this.state.age}
                    />
                </div>
            </div>
        );
    }
}

export default addPerson;
