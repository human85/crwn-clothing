import { useState } from 'react'
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import './sign-up-form-styles.scss'
import Button from '../button/button.component'

const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormfields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormfields)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match!')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use')
      } else {
        console.log('user creation encountered an error', error.message)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput label="Email" required onChange={handleChange} value={email} name="email" />

        <FormInput label="Password" required onChange={handleChange} value={password} name="password" />

        <FormInput
          label="Confirm Password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <Button>SIGN UP</Button>
      </form>
    </div>
  )
}

export default SignUpForm
