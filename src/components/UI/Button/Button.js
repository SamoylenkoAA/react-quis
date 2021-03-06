import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  let cls = [
    classes.Button,
    classes[props.type]
  ]
  return(
    <button 
      className={cls.join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button;