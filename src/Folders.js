import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './Styles/Folders.css'

class Folders extends Component {

  links = this.props.store.folders.map(folder =>
    <li className="indiFolder">
      <Link to={`/folders/${folder.id}`} folderId={folder.id} >{folder.name}</Link>
    </li>
    )

  links = [...this.links, <li><button>Add Button</button></li>]
  
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

  previousPage = () => (
    <Link to={this.props.history.goBack()}></Link>
  )
  
  goBack = () => (
    <li><button onClick={()=> this.previousPage()}>Go Back</button></li>
    )

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
          <Route path='/notes/:noteid'
          render={() => 
          this.goBack()}/>
        </ul>
      </div>
      </section>
    )
  }
}

export default withRouter(Folders)