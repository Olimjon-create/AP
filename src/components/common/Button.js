import React, { useState, memo } from "react";

function Button(props) {
  console.log(props);
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber();
  };

  console.log(number);

  return (
    <>
      <div>
        s<button onClick={handleAdd}>Increase</button>{" "}
      </div>
      <p>{number}</p>
    </>
  );
}

export default memo(Button);
