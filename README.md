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
`useEfect` is React method that I can tell at which renders is going to be called  

It is called:
`useEfect(() => console.log("Hi"))` - every time  
`useEfect(() => console.log("Hi"), [])` - only after first  
`useEfect(() => console.log("Hi"), [counter])` - everytime the value of counter changed  
`useEfect(() => console.log("Hi"), [a, b, c])` - everytime if any of a, b, c will change  

------------------
## Context
Is not replacement neither for *Props* nor *Redux* (centralized state store)  
It is a kind of communication channel. It doesn't care about kind of data nor organization - Redux does.

- createContext, Provider, useContext
