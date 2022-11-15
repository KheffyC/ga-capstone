import { useState } from 'react'
import { signUp } from '../../utilities/users-service';

const SignupForm = ({ setUser }) => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const handleChange = (e) => {
        const newSignup = {
            ...signup,
            [e.target.name]: e.target.value
        }
        setSignup(newSignup)
        
        
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try{
            const formDataCopy = {
                ...signup
            }
            delete formDataCopy.error 
            delete formDataCopy.confirm 
            const user = await signUp(formDataCopy)
            setUser(user)
        } catch {
            setSignup({
                ...signup, error: 'Sign up Failed - Try Again'
            })
        }
        

    }

    const disable = signup.password !== signup.confirm;



  return (
    <div>
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={signup.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={signup.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={signup.password} onChange={handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={signup.confirm} onChange={handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{signup.error}</p>
    </div>
  )
}

export default SignupForm
