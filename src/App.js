import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


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
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const handleBookCreate = async (title) => {

    const response = await axios.post("http://localhost:3001/books", {
      title  // equal to title: title
    })

    // DO NOT MODIFY THE STATE !! THIS IS WRONG CODE:
    // books.push({id: 123, title: title});
    // setBooks(books)
    const updatedBooks = [ ...books, response.data];
    setBooks(updatedBooks);
    console.log("List of books: ", books)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />  
      <BookCreate onCreate={handleBookCreate} books={books} />  
      {/* name of the PROPERTY 'onCreate' could be whatever I imagine */}
      </div>
  );
}

export default App;
