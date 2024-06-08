import style from './Button.module.css'

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={style.btn}>
      {children}
    </button>
  )
}

export default Button
