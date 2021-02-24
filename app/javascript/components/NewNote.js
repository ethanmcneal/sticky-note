import React from 'react'
import Note from './Note';

const NewNote = () => {
return(
    <div>
    <h1>New Note:</h1>
    <a href='/notes'>Back</a>
    <form action='/pages' method='post'>
    <p> Title</p>
    <input name='note[title]'/>
    <p>body</p>
    <textarea name='note[body]'/>
    <br />
    <button type='submit'>Add Note</button>
    </form>

    </div>
)

}


export default NewNote;