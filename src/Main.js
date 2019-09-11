import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Main.css'
import Folders from './Folders.js';

class Main extends Component {
  render(){
    return(
      <section>
        <main>
            <div className="folders_Main">
                <Folders store={this.props.store}/>
            </div>
                <div className="notes_Main">
            <Link to='/notes'>Notes</Link>
            </div>
        </main>
    </section>
    )
  }
}

export default Main;

// <div className="folders_Main">
//           <Link to='/folders'>Folders</Link>
//           <ul>
//             <li>Folder 1</li>
//             <li>Folder 2</li>
//             <li>Folder 3</li>
//           </ul>
//         </div>