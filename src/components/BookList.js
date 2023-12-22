import { useContext } from "react";
import BooksContext from "../context/Books";
import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
    const value = useContext(BooksContext)
    const renderedBooks = books.map((book) => {
        return <div>
            <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />  
        </div>
    })
    return (
    <div className="book-list">
        {value}
        {renderedBooks}
    </div>)
}

export default BookList;