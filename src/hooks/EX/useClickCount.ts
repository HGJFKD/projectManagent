import { useState } from "react";

const useClickCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount +1);
  };
  return { count, increment };
};

export default useClickCount;
