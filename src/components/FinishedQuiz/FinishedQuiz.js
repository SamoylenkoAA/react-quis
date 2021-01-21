import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {

  let successCount = Object.keys(props.results).reduce((total,key) => {
    if(props.results[key] === 'success'){
      total++;
    }
    return total;
  }, 0);

  return(
    <div className={classes.FinishedQuiz}>
      <ul>
        {
          props.quiz.map((item, index) =>{

            let cls = [
              'fa',
              props.results[item.id] === 'success' ? 'fa-check' : 'fa-times',
              classes[props.results[item.id]]
            ]

            return(
              <li key={index}>
                <strong>{item.id}. </strong>
                {item.question}
                <i className={cls.join(' ')} />
              </li>
            )
          })
        }
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <Button 
        onClick={props.onRetry}
        type={'primary'}
        // disabled="disabled"
      >
        Повторить
      </Button>
      <Link to='/'><Button type={'success'}>Перейти в список тестов</Button></Link>
    </div>
  )
}

export default FinishedQuiz