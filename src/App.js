import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {

  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return (book.id !== id)
    })
    setBooks(updatedBooks)
  }
  
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, title: newTitle}
      } else {
        return book
      }
    })
    setBooks(updatedBooks)
  }

  const handleBookCreate = (title) => {
    // DO NOT MODIFY THE STATE !! THIS IS WRONG CODE:
    // books.push({id: 123, title: title});
    // setBooks(books)
    const updatedBooks = [
      ...books, 
      // {id: 123, title: title}  - if key and value have identical names:
      {id: Math.round(Math.random() * 9999), title}  // good enought for this app
    ];
    setBooks(updatedBooks);
    console.log("List of books: ", books)
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />  
      <BookCreate onCreate={handleBookCreate} books={books} />  
      {/* name of the PROPERTY 'onCreate' could be whatever I imagine */}
      </div>
  );
}

export default App;
