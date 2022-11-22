import LoginForm from "../../components/LoginForm/LoginForm"
import SignupForm from "../../components/SignupForm/SignupForm"
import { useState } from 'react'


const AuthPage = ({ setUser }) => {
  const [isNewUser, setIsNewUser] = useState(true)
  return (
    <main>
      { isNewUser
      ?
      <SignupForm setUser={setUser} setIsNewUser={setIsNewUser} />
      :
      <LoginForm setUser={setUser} setIsNewUser={setIsNewUser}/>
    }
    </main>
  )
}

export default AuthPage