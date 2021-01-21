import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {
  let cls = [classes.AnswerItem];

  if(props.state){
    cls.push(classes[props.state])
  }

  return(
    <li 
      className={cls.join(' ')}
      onClick={() => props.clickAnswer(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;