import React from 'react';
import Button from './../../components/UI/Button/Button';
import Input from './../../components/UI/Input/Input';
import classes from './QuizCreator.module.css';

import {creatorControl} from "./../../form/formFramework";

function createOptionControl(number) {
  return creatorControl(
    {
      label: `Вопрос ${number}`,
      errorMessage: "Поле не может быть пустым"
    },
    {required: true}
  )  
}

class QuizCreator  extends React.Component {

  state={
    formControls: {
      question: creatorControl(
        {
          label: "Введите вопрос", 
          errorMessage: "Поле не может быть пустым"
        },
        {required: true}),
      option1: createOptionControl(1),
      option2: createOptionControl(2),
      option3: createOptionControl(3),
      option4: createOptionControl(4),
    }
  }

  submitHandler = event => {
    event.preventDefault();
  }

  addQuestionHandler = () => {

  }

  createQuestionHandler = () => {

  }

  onChangeHandler = () => {
    
  }

  render() {
    console.log(this.state.formControls);
    let renderInputs = Object.keys(this.state.formControls).map((key, index) => {
      let input = this.state.formControls[key];
      return(
        <React.Fragment key={index}>
          <Input 
            type="text"
            label={input.label}
            valid={input.valid}
            touched={input.touched}
            shouldValidate={input.validation}
            onChange={(event) => this.onChangeHandler(event, key)}
          />
          {index === 0 ? <hr/> : null}
        </React.Fragment>
      )
    })
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>
            Создание теста
          </h1>
          <form onSubmit={this.submitHandler}>
            {renderInputs}
            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuestionHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default QuizCreator;