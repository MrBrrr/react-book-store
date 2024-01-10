import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function BookCreate() {
    const { createBook } = useContext(BooksContext)
    const [title, setTitle] = useState("")

    const hanleTitleChange = (event) => {
        setTitle(event.target.value);
        // console.log(title);
    }

    const handleSubmit = (event) => {
        event.preventDefault()  // prevent reloading the page!
        createBook(title)
        setTitle("")
        console.log("new title submitted: ", title)
    }

    return <div className="book-create">
        <h3>Add a book:</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            {/* names of event handlers are strict!! */}
            <input className="input" value={title} onChange={hanleTitleChange}></input>
            {/* this approach is also correct, but 'form onSubmit' should be removed */}
            {/* <button onClick={handleSubmit}>Add book!</button> */}
            <button className="button">Add book!</button>
        </form>
    </div>;
}

export default BookCreate;