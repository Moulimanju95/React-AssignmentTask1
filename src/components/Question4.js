import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // State to store count value 
   // Function to increment count by 1
    const incrementCount = () => {
      // Update state with incremented value
      setCount((prev)=>{
       return prev+1
      });
    };
    return (
      <div>
        <button onClick={incrementCount}  style={{ marginLeft: '10px' , marginRight:'15px'}} > Click Here</button>
        {count}
      </div>
    );
}
export default Counter;