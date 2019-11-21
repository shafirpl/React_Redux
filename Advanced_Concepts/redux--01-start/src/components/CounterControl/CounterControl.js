import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <button className = "btn btn-lg btn-primary" onClick={props.clicked}>
        {props.label}
    </button>
);

export default counterControl;