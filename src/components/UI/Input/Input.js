import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  let inputType = props.type || 'text';
  let cls = [classes.Input];
  let htmlFor = `${inputType}-${Math.random()}`;

  if(isInvalid(props)){
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
          type={inputType}
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите верное значение'}</span>
          : null  
      }
    </div>
  );
}

function isInvalid({valid, touched, shouldValidate}){
  return !valid && touched && shouldValidate;
}
 
export default Input;