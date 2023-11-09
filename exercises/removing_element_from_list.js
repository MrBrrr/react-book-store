import React, {useState} from 'react';
import { Input } from './Input';
import { RemoveForm } from './RemoveForm';

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  
  const removeColorAtIndex = (indexToRemove) => {
    // TODO: Remove the element at 'indexToRemove'
    // Don't forget to update state by calling 'setColors'
    const newColors = colors.filter((color, index) => {
        return index !== indexToRemove
    })
    setColors(newColors)
  };
  
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>
        {renderedColors}
      </ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length}  />
    </div>
  );
}

export default App;
