import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
// export出去，供测试代码使用
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// 此处使用 intersection Types  交叉类型 用&连接而不是 ｜  使得新对象安全的拥有两者的全部属性
//TypeScript 提供了为类型注解设置别名的便捷语法，你可以使用 type SomeName = someValidTypeAnnotation
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

// 可使用 Parial<T> 将属性都设置为可选属性，这样容易实现接口中的属性，或者不实现。
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    size,
    disabled,
    children,
    href,
    ...restProps
  } = props;

  // btn btn-lg btn-secondary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType, // 对象key 是可变的时候，可采用 此写法，中括号加 模版字符串
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
