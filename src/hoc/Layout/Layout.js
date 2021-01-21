import React from 'react';
import classes from './Layout.module.css';

import MenuToggle from './../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from './../../components/Navigation/Drawer/Drawer';

class Layout extends React.Component{
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  closeMenuHandler = () => {
    this.setState({
      menu: false
    })
  }
  render(){
    return(
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClick={this.closeMenuHandler}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;