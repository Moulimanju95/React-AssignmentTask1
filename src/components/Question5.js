import React from 'react';

function MyButton() {
  // Event handler function
  const handleClick = () => {
    console.log('Button clicked!');
    alert('Button clicked!')
  };

  // Return JSX that renders a button
  return (
    <button style={{ marginLeft: '10px' }}
    onClick={handleClick}  >
      Click Me
    </button>
  );
}

export default MyButton;