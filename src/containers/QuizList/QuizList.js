import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './QuizList.module.css';

class QuizList extends React.Component{
  
  render() { 
    let renderTest = [1,2,3].map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/'+ item}>
            Тест {item}
          </NavLink>
        </li>
      )
    })
    console.log(renderTest);
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>
            Список тестов
          </h1>
          <ul>
            {renderTest}
          </ul> 
        </div>
      </div>
    );
  }
}
 
export default QuizList;