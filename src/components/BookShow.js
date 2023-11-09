function BookShow({book, onDelete}) {
    
    const handleClick = () => {
        console.log("deleting ", book.id, book.title)
        onDelete(book.id)
    }

    return <div className="book-show">
        {book.title}
        <div className="actions">
            <button className="delete" onClick={handleClick}>Delete</button>

        </div>
        </div>;
}

export default BookShow;