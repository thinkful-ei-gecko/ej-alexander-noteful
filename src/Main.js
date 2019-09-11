import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class Main extends Component {
  render(){
    return(
      <div className="main">
        <Link to='/'>
          Home
        </Link>
        <Link to='/folders'>
          Folders
        </Link>
        <Link to='/notes'>
          Notes
        </Link>
      </div>
    )
  }
}

export default Main;