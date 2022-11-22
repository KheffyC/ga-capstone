import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';

const SignupForm = ({ setUser }) => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const navigate = useNavigate()

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
            navigate('/')
        } catch {
            setSignup({
                ...signup, error: 'Sign up Failed - Try Again'
            })
        }
        

    }

    const disable = signup.password !== signup.confirm;



  return (
    <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
                <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                    <div class="w-full px-6 py-3">
                        <div>
                            <div class="mt-3 text-left sm:mt-5">
                                <div class="inline-flex items-center w-full">
                                    <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 space-y-2">
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <div>
                                    <label for="name" class="sr-only">Username</label>
                                    <input type="text" name="name" id="name" value={signup.name} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your username" />
                                </div>
                                <div>
                                    <label for="email" class="sr-only">Email</label>
                                    <input type="text" name="email" id="email" value={signup.email} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Password</label>
                                    <input type="password" name="password" id="password" value={signup.password} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" />
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Confirm</label>
                                    <input type="password" name="confirm" id="confirm" value={signup.confirm} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" />
                                </div>
                                <div class="flex flex-col mt-4 lg:space-y-2">
                                    <button type="submit" disabled={disable} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Sign up
                                    </button>
                                    <button class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Already a Member? Log in here </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="order-first hidden w-full lg:block">
                    <img class="object-cover h-full bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <p className="text-white">&nbsp;{signup.error}</p>
    </section>
  )
}

export default SignupForm
