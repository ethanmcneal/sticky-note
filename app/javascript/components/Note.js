import React from 'react'

const Note = (props) =>{
    const { title, body, id } = props.note
    const renderNote = () => {
            return (
        <div>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <a href='/notes'>back</a>
        </div> )
        
    }
            
    
    
    
    
    
    
    return( 
        <div>
            <h1> Viewing Note: {id}</h1>
            {renderNote()}
        </div>
    )
    }

export default Note;