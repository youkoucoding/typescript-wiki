import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log('inner');
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('click', updateMouse);
    return () => {
      document.removeEventListener('click', updateMouse);
    };
  }, []); // 数组可以有任意项目，当任意一项发生变化，就重新执行effect

  return (
    <p>
      X: {positions.x}
      <br />
      X: {positions.y}
    </p>
  );
};

export default MouseTracker;
