import React, { useState, memo } from "react";

function Button(props) {
  console.log(props);
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  console.log(number);

  return (
    <>
      <div>
        <button onClick={handleAdd}>Increase</button>{" "}
      </div>
      <p>{number}</p>
    </>
  );
}

export default memo(Button);
