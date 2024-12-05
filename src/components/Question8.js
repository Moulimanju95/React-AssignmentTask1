import React, { useRef } from 'react';
import { useState } from "react";

function InputForm() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (event) => {
    alert('A name was submitted: ' + inputRef.current.value);
    event.preventDefault();
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <label style={{ marginRight: '10px' }}>
        Name:
        <input type="text" ref={inputRef} 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginLeft: '5px' }} />

       
      </label>
      <button type="submit" 
      style={{ display: 'block', marginTop: '10px' }}>
        Submit
      </button>
      <p>Current Input Value: {inputValue}</p>
    </form>
  );
}
export default InputForm;