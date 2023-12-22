import './App.css';
import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


function App() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async() => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  // This is callend only on initial rendering 
  //  + when rerendered but this has to be specified in the second argument []
  useEffect(() =>{
    fetchBooks()
  }, [])

  // DO NOT DO THIS!!!
  // fetchBooks();  
  // this causes the stuck in a loop of rendering App and caling this line
  // checkout: browser -> inspect -> network -> fetch xhr

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return (book.id !== id)
    })
    setBooks(updatedBooks)
  }
  
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle})
    console.log("response", response.data)

    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, ...response.data}  // update te list with received response
        // take all the different properties of that object (key-value pairs)
        //  and update the object right here
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
