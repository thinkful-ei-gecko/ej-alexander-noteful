import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './Main';
import Folders from './Folders';
import Notes from './Notes';
import './Styles/App.css';

class App extends Component{
  render(){
    
  return (
    <div>
    <Router>
      <header className="heading">
        <Link to="/">Noteful</Link>
      </header>
      <div className="folders_Main">
        <Folders store={this.props.store}/>
      </div>
      <div className="notes_Main">
        <Switch>
          <Route exact path='/notes' render={()=> <Notes store={this.props.store}/>} />
          <Route exact path='/notes/:noteId' component={() => <div>Individual Note</div>} />
          <Route exact path='/folders/:folderId' component={() => <Notes store={this.props.store}/>} />
        </Switch>
      </div>

    </Router>
    </div>
  );
  }
}

export default App;


// <Switch>
//         <div>
//         <Route exact path='/' render={()=> <Main store={this.props.store}/>} />
//         <Route exact path='/folders' render={()=> <Folders store={this.props.store}/>} />
//         <Route exact path='/notes' component={Notes} />
//         </div>
//       </Switch>