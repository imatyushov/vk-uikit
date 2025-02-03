import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { useButtonContext } from "../ButtonContext";
import cls from './Counter.module.scss';

export const Counter = () => {
  
  const {count, size, variant} = useButtonContext();
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isFirstRender = useRef(true)

  const clsNames = clsx(
    cls.counter,
    cls[size],
    cls[variant],
  );

  const handlePulseAnimation = (duration: number) => {
    const pulse = document.createElement('span');
    pulse.classList.add(cls.pulse)
    counterRef.current?.appendChild(pulse);
    pulse.classList.add(cls.active)

    const timeoutId = setTimeout(() => {
      pulse.remove()
      clearTimeout(timeoutId)
    }, duration)
  }

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else {
      handlePulseAnimation(1_000);
    }
  }, [count]);

  return (
    <span className={clsNames} ref={counterRef}>
      {count <= 99 ? count : '99+'}
    </span>
  );
}
