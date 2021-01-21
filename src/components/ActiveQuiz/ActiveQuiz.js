
import React from 'react';
import classes from './ActiveQuiz.module.css';

import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.activeQuestion}.</strong>&nbsp;
        {props.question}
      </span>
      <small>
        {props.activeQuestion} из {props.questionLength}
      </small>
    </p>
    <AnswersList
      answers={props.answers}
      clickAnswer={props.clickAnswer}
      state={props.state}
    />
  </div>
)

export default ActiveQuiz;