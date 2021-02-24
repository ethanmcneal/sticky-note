import React from 'react'

const Notes = (props) => {
    const notes = props.notes;
    
    const renderNotes = () => {
    return notes.map(note => {
        return (
    <div>
        
        <h1> {note.title} </h1>
        <p> {note.body}</p>
        <a href={`/notes/${note.id}`}>View Note</a>
        
    </div>
        )
})
}

return (
    <div>
    <h1> StickyNotes</h1>
    <a href='/notes/new'>New Note</a>
        {renderNotes()}
    </div>
)
}

export default Notes;