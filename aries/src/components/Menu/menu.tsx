import React, { useState } from 'react';
import classNames from 'classnames';

// string literal type allow to specify the exact value a string must have.
type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void; // 函数类型
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const classes = classNames('aries-menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
