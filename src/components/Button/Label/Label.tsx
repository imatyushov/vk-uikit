import cls from './Label.module.scss'

export const Label = ({children}) => {

  return (
    <span className={cls.label}>{children}</span>
  );
}
