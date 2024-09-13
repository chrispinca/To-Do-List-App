import React from "react"

function Note({title, content, onDelete}) {
    return (
        <div className = "note">
            <button className = "delete-button" 
                                    onClick = {onDelete}>
                                    ❌
            </button>
            <h3 className = "note-title">{title}</h3>
            <p className = "note-content">{content}</p>
        </div>
    )
}

export default Note;