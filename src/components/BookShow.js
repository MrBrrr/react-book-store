import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({book}) {
    const { deleteBookById } = useBooksContext()
    const [showEdit, setShowEdit] = useState(false)

    const handleEditSubmit = () => {
        setShowEdit(false)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () => {
        console.log("deleting ", book.id, book.title)
        deleteBookById(book.id)
    }

    let content = <h3>{book.title}</h3> 
    if (showEdit){  //  === true
        content = <BookEdit book={book} onEditSubmition={handleEditSubmit}/>
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