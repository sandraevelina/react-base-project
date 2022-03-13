import React from 'react';
import './button.css';

function Button(props) {
    return (
    <button type="button" onClick={() => props.handleClick(props.text)}>
     {props.label}
    </button>
  );
}

export default Button;
