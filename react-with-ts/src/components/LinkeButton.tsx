import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../App';

const LinkeButton: React.FC = () => {
  //　不同的state，应该用不同的 useState  即，每个字段应对应单独的useState 方便拆分
  // const [obj, setObj] = useState({ like: 0, on: true });
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  // const likeRef = useRef(0); // 在渲染中保持唯一的引用，.current 属性被初始化为传入的参数，返回一个可变的ref对象

  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);

  const theme = useContext(ThemeContext);

  // console.log(theme);
  const style = {
    color: theme.color,
    background: theme.background,
  };

  useEffect(() => {
    document.title = `${like} times`;
  }, [like]);

  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated');
    } else {
      didMountRef.current = true;
    }
  });

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  // const handleAlertClick = () => {
  //   setTimeout(() => {
  //     alert('you have clicked ' + likeRef.current);
  //   }, 3000);
  // };

  return (
    <div>
      {/* ref属性，在虚拟dom节点中拿到真实的dom节点 */}
      <input type='text' ref={domRef} />
      <button
        onClick={() => {
          setLike(like + 1);
          // likeRef.current++; // 修改ref 不会引发组件重新渲染
        }}
        style={style}
      >
        {like} 👍👍👍
      </button>
      <button onClick={() => setOn(!on)}> {on ? 'Hello' : 'Bye'} 👍👍👍</button>
      {/* <button onClick={handleAlertClick}> Clicked At. </button> */}
    </div>
  );
};

export default LinkeButton;
