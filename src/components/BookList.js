import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
    const renderedBooks = books.map((book) => {
        return <div>
            <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />  
        </div>
    })
    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;