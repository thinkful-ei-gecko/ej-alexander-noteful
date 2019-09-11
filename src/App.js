import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './Main';
import Folders from './Folders';
import Notes from './Notes';
import './App.css';

class App extends Component{
  render(){
    
  return (
      <Switch>
        <Route path='/' component={Main} />
        <Route exact path='/folders' component={Folders} />
        <Route exact path='/notes' component={Notes} />
      </Switch>
  );
  }
}

export default App;
