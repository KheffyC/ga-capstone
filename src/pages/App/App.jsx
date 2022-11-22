import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage'


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <NavBar user={user} />
      <Routes>
        <Route path="/signin" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
  );
}

export default App;