import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Drawer.module.css';

import Backdrop from './../../UI/Backdrop/Backdrop';

const Drawer = props => {
  let links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false},
  ];
  let cls = [
    classes.Drawer,
  ]

  let renderLinks = links.map((link, index) => {
    return(
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={props.onClick}
        >
          {link.label}
        </NavLink>
      </li>
    )
  })

  if(!props.isOpen){
    cls.push(classes.close);
  }

  return(
    <React.Fragment>
      <nav className={cls.join(' ')}>
        <ul>
          { renderLinks }
        </ul>
      </nav>
      { props.isOpen ? <Backdrop onClick={props.onClick} /> : null}
    </React.Fragment>
  )
}

export default Drawer;