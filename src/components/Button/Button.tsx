import { ButtonHTMLAttributes, useState } from "react";
import clsx from 'clsx';
import { ButtonContext } from "./ButtonContext"
import { Counter } from "./Counter/Counter";
import { Label } from "./Label/Label";
import cls from './Button.module.scss'

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonState = 'enabled' | 'disabled' | 'loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
}

export const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    variant = 'primary',
    state = 'enabled',
    className,
    onClick,
    disabled,
    children,
    ...otherProps
  } = props;

  const [count, setCount] = useState(0);

  const clsNames = clsx(
    cls.button,
    cls[size],
    cls[variant],
    cls[state],
    className,
  )

  const handleOnChange = (e) => {
    setCount(prev => prev + 1);
    if (onClick) onClick(e);
  }

   return (
     <ButtonContext.Provider value={{count, size, variant}}>
        <button
          onClick={(e) => handleOnChange(e)}
          className={clsNames}
          disabled={disabled || state !== 'enabled'}
          {...otherProps}
        >
          <span className={cls.buttonContent}>{children}</span>
          <span className={cls.loader}></span>
        </button>
     </ButtonContext.Provider>
   );
}

Button.Counter = Counter;
Button.Label = Label;
