import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useBooksContext()
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