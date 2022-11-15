import LoginForm from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"


const AuthPage = ({ setUser }) => {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignupForm setUser={setUser} />
      <LoginForm setUser={setUser}/>
    </main>
  )
}

export default AuthPage