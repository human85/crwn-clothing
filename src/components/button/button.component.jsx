import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const Button = ({ children, buttonType, ...rest }) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`} {...rest}>
      {children}
    </button>
  )
}

export default Button
