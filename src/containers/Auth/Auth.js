import React from 'react';
import is from 'is_js';
import classes from './Auth.module.css';

import Button from './../../components/UI/Button/Button';
import Input from './../../components/UI/Input/Input';

class Auth extends React.Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        label: 'Email',
        value: '',
        type: 'email',
        errorMessage: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        label: 'Пароль',
        value: '',
        type: 'password',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }
  
  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  validateControl = (value, validation) => {
    if(!validation){
      return true
    }
    let isValid = true;

    if(validation.required){
      isValid = value.trim() !== '' && isValid
    }
    if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid
    }
    if(validation.email){
      isValid = is.email(value) && isValid;
    }
    
    return isValid;
  }

  onChangeHandler = (event, key) =>{
    
    let formControls = {...this.state.formControls};
    let control = {...formControls[key]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[key] = control;

    let isFormValid = Object.values(formControls).every((control) => control.valid);
    
    this.setState({
      formControls,
      isFormValid
    })
  }

  render() {
    let renderInputs = Object.keys(this.state.formControls).map((key, index) => {
      let input = this.state.formControls[key];
      return(
        <Input
          key={index}
          type={input.type}
          label={input.label}
          value={input.value}
          errorMessage={input.errorMessage}
          valid={input.valid}
          touched={input.touched}
          shouldValidate={!!input.validation}
          onChange={(event) => this.onChangeHandler(event, key)}
        />
      )
    }) 
    return ( 
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {renderInputs}

            <Button 
              type='success' 
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>

            <Button 
              type='primary' 
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Auth;