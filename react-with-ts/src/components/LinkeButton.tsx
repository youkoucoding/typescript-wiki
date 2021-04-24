import React, { useState, useEffect } from 'react';

const LinkeButton: React.FC = () => {
  //　不同的state，应该用不同的 useState  即，每个字段应对应单独的useState 方便拆分
  // const [obj, setObj] = useState({ like: 0, on: true });
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    document.title = `${like} times`;
  });

  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like} 👍👍👍</button>
      <button onClick={() => setOn(!on)}>{on ? 'Hello' : 'Bye'} 👍👍👍</button>
    </>
  );
};

export default LinkeButton;
