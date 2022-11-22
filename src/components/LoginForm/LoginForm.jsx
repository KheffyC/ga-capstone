// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser, setIsNewUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate()

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <section>
      <div class="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">Log in to your account</h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 sm:px-10">
              <p className="error-message">&nbsp;{error}</p>
              <form class="space-y-6" autocomplete="off" onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block text-md font-large text-gray-700"> Email address </label>
                  <div class="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email" value={credentials.email} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                  </div>
                </div>
                <div>
                  <label for="password" class="block text-md font-large text-gray-700"> Password </label>
                  <div class="mt-1">
                      <input id="password" name="password" type="password" autocomplete="current-password" value={credentials.password} onChange={handleChange} required class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                  </div>
                </div>
                <div class="flex items-center justify-between"></div>
                <div>
                  <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">LOG IN</button>
                </div>
              </form>
              <br />
              <div class="text-sm">
                  <button onClick={() => setIsNewUser(true)} class="font-medium text-blue-600 hover:text-blue-500"> Forgot you are not a member? Sign up here </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
