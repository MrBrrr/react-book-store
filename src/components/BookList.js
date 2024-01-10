import { useContext } from "react";
import BookContext from "../context/Books";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useContext(BookContext)
    let renderedBooks;
        renderedBooks = books.map((book) => {
            return <div>
                <BookShow key={book.id} book={book} />  
            </div>
        })
    
    return (
    <div className="book-list">
        {renderedBooks}
    </div>)
}

export default BookList;