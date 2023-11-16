import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import './authentication.styles.scss'

function Authentication() {
  // useEffect(() => {
  //   const getUserDocRef = async () => {
  //     const response = await getRedirectResult(auth)
  //     if (!response) return
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //     console.log(userDocRef)
  //   }

  //   getUserDocRef()
  // }, [])

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>sign in redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
