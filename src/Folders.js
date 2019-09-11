import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Styles/Folders.css'

class Folders extends Component {

  links = this.props.store.folders.map(folder =>
    <li className="indiFolder">
      <Link to={`/folders/${folder.id}`} folderId={folder.id} >{folder.name}</Link>
    </li>
    )
  
  selectedLinks = (folderId) => this.props.store.folders.map(folder => {
    console.log(folderId);
    console.log(folder.id);
    if (folderId === folder.id) {
      return (
      <li className="indiFolder selected-folder">
      <Link to={`/folders/${folder.id}`} folderId={folder.id} >{folder.name}</Link>
    </li>
      )
    } else {
      return (
      <li className="indiFolder">
        <Link to={`/folders/${folder.id}`} folderId={folder.id} >{folder.name}</Link>
      </li>
      )
    }
  }
    )

    // selectedLinks = (folderId) => this.props.store.folders.map(folder => {
    //   if (folderId === folder.id) {
    //     return (
    //     <li className="indiFolder">
    //     <Link to={`/folders/${folder.id}`} folderId={folder.id} >{folder.name}</Link>
    //   </li>
    //     )
    //   } else {
    //     return null;
    //   }
    // }
    //   )
  
  

  render() {
    return(
      <section>
      <div>
        <ul>
          <Route exact path='/' render= { () => this.links } />
          <Route
            path='/folders/:folderId'
            render={(folderId) =>
            this.selectedLinks(folderId.match.params.folderId)
            }
            />
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