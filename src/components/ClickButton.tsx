import { useState } from "react";

const ClickButton = () => {
  const [num, setNum] = useState(0);

  return <button onClick={() => setNum((prev) => prev + 1)}>Click Me {num}</button>;
};

export default ClickButton;
