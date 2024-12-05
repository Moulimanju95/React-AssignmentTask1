import React from 'react';

function Unorderlist(){
const numbers = [1,2,3,4,5];
  return (
    <ul>
      {numbers.map((numbers) => (
        <li>{numbers}</li>
      ))}
    </ul>
  );
}
export default Unorderlist;