import { useContext, useState } from "react";
import BooksContext from "../context/Books";

function BookEdit({book, onEditSubmition}) {
    const { editBookById } = useContext(BooksContext)
    const [title, setTitle] = useState(book.title)

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        // console.log(title);
    }

    const handleSave = (event) => {
        event.preventDefault()  // prevent reloading the page!
        onEditSubmition()  // close the edit form
        editBookById(book.id, title)
    }

    return <div>
        <form className="book-edit">
            <input className="input" value={title} onChange={handleTitleChange}></input>
            <button className="button is-primary" onClick={handleSave}>Save</button>
        </form>
    </div>;
}

export default BookEdit;