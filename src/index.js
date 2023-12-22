import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BooksContext.Provider value={5}>
        <App />
    </BooksContext.Provider>
);
