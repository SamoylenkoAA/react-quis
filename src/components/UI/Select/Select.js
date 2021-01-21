import React, { createFactory } from 'react';
import classes from './Select.module.css';

const Select = (props) => {
  let htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select
        id={htmlFor}
        value={props.value} 
      >

      </select>
    </div>
  );
}
 
export default Select;