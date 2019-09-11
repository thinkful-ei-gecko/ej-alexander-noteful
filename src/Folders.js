import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Styles/Folders.css'

class Folders extends Component {

  links = this.props.store.folders.map(folder => 
    <li className="indiFolder">
      <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
    </li>
    )

  render() {
    return(
      <section>
      <div>
        <ul>
          {this.links}
          <li>Add folder</li>
        </ul>
      </div>
      </section>
    )
  }
}

export default Folders

//make sure to change the static index in the links

// <link to='/folders/folder-'>
//           {this.props.store.folders[0].name}
//         </link>
//         <link to='/folders/folder-'>
//           {this.props.store.folders[1].name}
//         </link>
//         <link to={`./folders/folder-${this.props.store.folders[2].id}`} >
//           {this.props.store.folders[2].name}
//         </link>