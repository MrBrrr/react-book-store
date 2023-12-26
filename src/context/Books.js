import { createContext } from "react";
import { useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(5);

    const objectToShare = {
        count: count, // count: count
        incrementCount: () => {
            setCount( count + 1 )
        }
    }
    return <BooksContext.Provider value={objectToShare}>
        {children}
    </BooksContext.Provider>

}

// import BookContext, { Provider } from '...'
// import { Provider } from '...'  - in index.js
// import BookContext from '...'  - in component file 

export { Provider }
export default BooksContext;
