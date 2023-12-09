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
