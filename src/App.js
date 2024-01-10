import './App.css';
import { useEffect } from 'react';
import useBooksContext from './hooks/use-books-context';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
  // this line just picks the specific function from the object / context
  const { fetchBooks } = useBooksContext()

  // DO NOT DO THIS!!!
  // fetchBooks();  
  // this causes the stuck in a loop of rendering App and caling this line
  // checkout: browser -> inspect -> network -> fetch xhr
  // use useEffect instead

  // This is callend only on initial rendering 
  //  + when rerendered but this has to be specified in the second argument []
  useEffect(() =>{
    fetchBooks()
  }, [])
  
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList/>  
      <BookCreate/>  
      {/* name of the PROPERTY 'onCreate' could be whatever I imagine */}
      </div>
  );
}

export default App;
