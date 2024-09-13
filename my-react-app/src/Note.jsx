import React from "react"

function Note(props) {
    return (
        <div className = "note">
            <button className = "delete-button" 
                                    onClick = {props.onDelete}>
                                    ❌
            </button>
            <h3 className = "note-title">{props.title}</h3>
            <p className = "note-content">{props.content}</p>
        </div>
    )
}

export default Note;