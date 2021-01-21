import React from 'react';
import classes from './Quiz.module.css';

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component{
  state = {
    activeQuestion: 0,
    answerState: null, // {[id: 'success || error']}
    results: {}, // {[id: 'success || error']}
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо ?',
        rightAnswer: 3,
        answers: [
          {text: 'Черное', id: 1},
          {text: 'Зеленое', id: 2},
          {text: 'Синие', id: 3},
          {text: 'Красное', id: 4},
        ]
      },
      {
        id: 2,
        question: 'В каком году был основан Санкт-Петербург ?',
        rightAnswer: 1,
        answers: [
          {text: '1703', id: 1},
          {text: '1702', id: 2},
          {text: '1705', id: 3},
          {text: '1706', id: 4},
        ]
      }
    ],
    isFinished: false
  }

  clickAnswerHandler = (id) => {
    if(this.state.answerState){
      let key = Object.keys(this.state.answerState);
      if(this.state.answerState[key] === 'success'){
        return;
      }
    }
   
    let question = this.state.quiz[this.state.activeQuestion];
    let results = this.state.results;

    if(question.rightAnswer === id){
      if(!results[question.id]){
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {[id]: 'success'},
        results
      })

      let timeout = setTimeout(() => {
        if(this.isQuizFinished()){
          this.setState({
            isFinished: true
          })
        }else{
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        clearTimeout(timeout);
      }, 1000)
    }else{
      results[question.id] = 'error';
      this.setState({
        answerState: {[id]: 'error'},
        results
      })
    }
  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      isFinished: false,
      answerState: null,
      results: {},
      activeQuestion: 0,
    })
  }
  
  render(){
    let activeQuestion = this.state.activeQuestion;
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {
            !this.state.isFinished 
              ? <ActiveQuiz
                  answers={this.state.quiz[activeQuestion].answers}
                  question={this.state.quiz[activeQuestion].question}
                  clickAnswer={this.clickAnswerHandler}
                  questionLength={this.state.quiz.length}
                  activeQuestion={this.state.activeQuestion + 1}
                  state={this.state.answerState}
                />
              : <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;