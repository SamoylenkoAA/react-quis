import React from 'react';
import classes from './AnswerList.module.css';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
  return(
    <ul className={classes.AnswersList}>
      {
        props.answers.map((answer, index) => {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              clickAnswer={props.clickAnswer}
              state={props.state ? props.state[answer.id] : null}
            />
          )
        }) 
      }
    </ul>
  )
}

export default AnswersList;