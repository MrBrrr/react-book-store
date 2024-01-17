# Notes
...

## Editing Books
BookShow component displays either book title or BookEdit component (fliping that by clicking pencil icon)


-------------------

`let` allows to change the variable over time

-------------------
Back ticks + curly braces allow for string interpolation - putting the js variable inside:
```js
<img src={`https://picsum.photos/seed/${book.id}/300/200`} />
```

------------------
Creating API server:
1. Open new (2nd) terminal
1. Go to 06_books directory: `npm install json-server`
1. Add db.json and fill with: {"books": []}
1. edit package.json adding to scropts: "server": "json-server -p 3001 --watch db.json"
1. In 2nd terminal run `npm run server`

Since now I need two terminals running two servers (react develop and json)
Default listning port for react server is 3000 (if it's busy it will ask for another)  

In future: 
Go to json server: `localhost:3001/books`

Requests:
mth     url                             req body                    resp body
POST    http://localhost:3000/books     {title: Harry Potter}       {title: New Title, id: 1}
GET     http://localhost:3000/books     -                           [{...}, {...}]
PUT     http://localhost:3000/books/1   {title: New Title, id: 1}   {...}
DELETE  http://localhost:3000/books/1   -                           {...}

------------------
REST Client
1. Install extenstion REST Client
1. Create file `api.http`
1. Optionally (in case of Error when sending requests) edit `package.json` adding --host 127.0.0.1 to the server command

------------------
## useEffect
is a React method that I can tell at which renders is going to be called  

It is called:
`useEfect(() => console.log("Hi"))` - after first and every other render  
`useEfect(() => console.log("Hi"), [])` - only after first  
`useEfect(() => console.log("Hi"), [counter])` - everytime the value of counter changed  
`useEfect(() => console.log("Hi"), [a, b, c])` - everytime if any of a, b, c will change  

Confusing facts around `useEffect`
#### Stale variable references
https://codesandbox.io/p/sandbox/hungry-fog-0ev1ec or [confusing_use_effect.js](./exercises/confusing_use_effect.js)  
Every time the component is rendered the completly new set of variables are beeing declared. But the useEffect won't be recalled (empty array as 2nd argument). Eslint providea hint (warning yellow underscored) bur following it sometimes may result in even more bugs.  

I shouldn't follow that in case of fetchBooks eslint [hint](./src/App.js). This would follow the endlesss stream of requests to http. WHY?  
The `useEffect` is called during first render. The `fetchBooks` variable is created and stored in PC memory. First render of `useEffect` causes call to the `fetchBooks` function which update the state of `books`. That causes rerender of Provider component and all of its children, so the `App` component consiting of rerender of `useEffect`- that create another variable with the same name `fetchBooks`... - and this is the loop, more and more `fetchBooks` variable exists and being called durign useEffect rerenders.  

To solve eslint hint and avoid future bugs, add the `fetchBooks` to the list and use new hook: **`useCallback`**

## useCallback
Tells React not to change the function over renders  
Fixes buggy part of useEffect (and other similar situations)
Unlikely to useEffect is neither executed nor running the function  
1. First render - just returns the function passed.  
2. Second render if second argument is:
    - `[]` it gives back the original function from the first render, although the `fetchBook` (function) vairable is created and saved to memory again
    - 


`const stableFetchBooks = useCallback(fetchBooks, [])` second argument is a mandatory array -  



------------------
## Context
Is not replacement neither for *Props* nor *Redux* (centralized state store)  
It is a kind of communication channel. It doesn't care about kind of data nor organization - Redux does.

- createContext, Provider, useContext

Changing the location of: books, editBookById, deleteBookById, fetchBook, createBook to Context will change the way of providing that to different components - not through props any more.

------------------
## Hooks
- useState
- useEffect
- useContext
...

### Custom Hooks
Small or large chunk of logic - use-books-context.js
