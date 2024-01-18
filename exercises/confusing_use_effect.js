import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // seeting up a click event hendler directly on a document body object
    // DON'T Do THIS 
    // below funciton incorrectly sets up a click event on documment body - it allows for only 1 listener
    // document.body.onclick = () => {
    //   console.log(counter);   // the value of counter here wont be updated (always 0)
    // };

    // GOOD WAY OF DOING THAT:
    const listener = () => {
      console.log(counter)
    }
    document.body.addEventListener("click", listener)

    const cleanUp = () => {
      console.log("clean up")
      document.body.removeEventListener("click", listener)
    }
    return cleanUp;  // this is called since the second render (first was just returned, and then called, but why it happens like this??)
  // }, []);
  }, [counter]);  // fixing with eslint hint

  return (
    <div onClick={() => console.log("work only on small part of screen")}>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;
