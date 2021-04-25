import React from 'react';
import { ThemeContext } from '../App';

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = React.useContext(ThemeContext);

  const style = {
    color: theme.color,
    background: theme.background,
  };

  return <h2 style={style}>{props.message}</h2>;
};

Hello.defaultProps = {
  message: 'I Love TypeScript.',
};

export default Hello;
