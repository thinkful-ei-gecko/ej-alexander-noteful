import React, { Component } from 'react';

class Notes extends Component {

  allNotes=this.props.store.notes.map(note => 
    <div>
      <h2>{note.name}</h2>
      <p>{note.modified}}</p>
      <button>Delete Note</button>
    </div>
  )

  render() {
    console.log()
    return(
      <section>
        {this.allNotes}
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