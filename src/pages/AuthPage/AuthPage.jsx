import LoginForm from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"


const AuthPage = ({ setUser }) => {
  return (
    <main>
      <SignupForm setUser={setUser} />
      <LoginForm setUser={setUser}/>
    </main>
  )
}

export default AuthPage