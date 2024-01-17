import { useCallback, createContext } from "react";
import { useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }
    const stableFetchBooks = useCallback(fetchBooks, []);
    
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
    
      const createBook = async (title) => {
    
        const response = await axios.post("http://localhost:3001/books", {
          title  // equal to title: title
        })
    
        // DO NOT MODIFY THE STATE !! THIS IS WRONG CODE:
        // books.push({id: 123, title: title});
        // setBooks(books)
        const updatedBooks = [ ...books, response.data];
        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        stableFetchBooks,
        deleteBookById,
        editBookById,
        createBook,
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>

}

// import BookContext, { Provider } from '...'
// import { Provider } from '...'  - in index.js
// import BookContext from '...'  - in component file 

export { Provider }
export default BooksContext;
