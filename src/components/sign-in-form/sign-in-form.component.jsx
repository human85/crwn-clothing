import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import Button from '../button/button.component'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.util'

const defaultFormfields = {
  email: '',
  password: ''
}

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormfields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormfields)
  }

  const handleChange = async e => {
    const { name, value } = e.target

    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  // google 登录
  async function signInWithGoogle() {
    await signInWithGooglePopup()
  }

  // 账号密码登录
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      alert(error.code)
    }
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="text" required onChange={handleChange} value={email} name="email" />

        <FormInput label="Password" type="text" required onChange={handleChange} value={password} name="password" />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
