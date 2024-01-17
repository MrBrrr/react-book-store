import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // seeting up a click event hendler directly on a document body object
    // DON'T Do THIS
    document.body.onclick = () => {
      console.log(counter);   // the value of counter here wont be updated (always 0)
    };
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
