import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App />
    </Provider>
);
// App goes to Provider children
