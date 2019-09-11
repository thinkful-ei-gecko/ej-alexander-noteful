import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Styles/Note.css';

class Notes extends Component {

  allNotes=this.props.store.notes.map(note => {
    return (
    <div className="note">
      <h2>
      <Link to={`/notes/${note.id}`} noteId={note.id}>{note.name}</Link></h2>
      <p>{note.modified}}</p>
      <button>Delete Note</button>
    </div>
      ) 
    }
  )

  specNotes = (specNotes) => this.props.store.notes.map(note => {

    console.log(specNotes)
    //Don't forget to fix date object format
    if (specNotes === note.folderId) {
      return (
        <section>
          <div className='note'>
            <h2><Link to={`/notes/${note.id}`}>{note.name}</Link></h2>
            <div className="bottom-note">
              <p>Date Modified on {note.modified}</p>
              <button>Delete Note</button>
            </div>
          </div>
        </section>
    )
    }}
  )

  singleNote = (specNotes) => this.props.store.notes.map(note => {

    console.log(specNotes)
    //Don't forget to fix date object format
    if (specNotes.match.params.noteId === note.id) {
      return (
        <section>
          <div className='note'>
            <h2><Link to={`/notes/${note.id}`}>{note.name}</Link></h2>
            <div className="bottom-note">
              <p>Date Modified on {note.modified}</p>
              <button>Delete Note</button>
            </div>
          </div>
          <p>{note.content}</p>
        </section>
    )
    }}
  )

  render() {
    return(
      <section>
        <Route
          path='/folders/:folderId'
          render={(folderId) =>
          this.specNotes(folderId.match.params.folderId)
          }
          />
        <Route
          path='/notes/:noteId'
          render={(noteId) =>
          this.singleNote(noteId)
          }
          />
      </section>
    )
  }
}

export default Notes


//if i visited /folders/xyz
//should log xyz

//if visited /folders/b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1
//should log out b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1

//next step
//filter function for store notes that checks id === folderid