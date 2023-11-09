import { useState } from "react";

function BookEdit({book, onEdit}) {

    const [title, setTitle] = useState(book.title)

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        // console.log(title);
    }

    const handleSave = (event) => {
        event.preventDefault()  // prevent reloading the page!
        onEdit(book.id, title)
    }

    return <div>
        <form className="book-edit">
            <input className="input" value={title} onChange={handleTitleChange}></input>
            <button className="button is-primary" onClick={handleSave}>Save</button>
        </form>
    </div>;
}

export default BookEdit;