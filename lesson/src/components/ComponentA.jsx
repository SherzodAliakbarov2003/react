import { useState } from "react";
import './ComponentA.scss'

const ComponentA = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    setCount(count - 1);
  };
  const [color, setColor] = useState(false);
  const handleColor = () => {
    setColor(!color)
  }
  return (
    <>
      <div className={color ? 'back' : 'active'}>
      <span className="title">My Count</span>
      <h2 className="count">{count}</h2>
      <button className="btn" onClick={handleCountPlus}>Plus</button>
      <button className="btn1" onClick={handleCountMinus}>Minus</button>
      <button className="btn2" onClick={handleColor}>Color</button>
      </div>
    </>
  );
};
export default ComponentA;
