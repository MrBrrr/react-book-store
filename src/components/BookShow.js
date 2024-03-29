import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onEdit}) {
    
    const [showEdit, setShowEdit] = useState(false)

    const handleEditSubmit = (id, newTitle) => {
        onEdit(id, newTitle)
        setShowEdit(false)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () => {
        console.log("deleting ", book.id, book.title)
        onDelete(book.id)
    }

    let content = <h3>{book.title}</h3> 
    if (showEdit){  //  === true
        content = <BookEdit book={book} onEdit={handleEditSubmit}/>
    }

    return <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>  
        </div>
        </div>;
}

export default BookShow;