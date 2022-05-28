import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
    // inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Manish</h1>
      <input type="text" placeholder="Type Something..." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default UseRefExample;
