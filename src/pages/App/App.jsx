import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage'
import Footer from '../../components/Footer/Footer';
import * as gamesAPI from '../../utilities/game-api'


function App() {
  const [user, setUser] = useState(getUser())
  const [consoles, setConsoles] = useState([])

  useEffect(() => {
    async function getGames(){
      const games = await gamesAPI.getAllGames()
      console.log(games, 'working')
      setConsoles(games)
    }
    getGames()
  }, [])
  


  return (
    <main className="App">
      <NavBar user={user} />
      <Routes>
        <Route path="/signin" element={<AuthPage setUser={setUser} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;