import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home'
import GameGenre from '../GameGenre/GameGenre'
import SingleGamePage from '../SingleGamePage/SingleGamePage';
import AuthPage from '../AuthPage/AuthPage'
import PlatformGames from '../PlatformGames/PlatformGames';
import MyProfile from '../MyProfile/MyProfile';
import Footer from '../../components/Footer/Footer';
import * as gamesAPI from '../../utilities/game-api'


function App() {
  const [user, setUser] = useState(getUser())
  const [recentGames, setRecentGames] = useState([])
  const [genres, setGenres] = useState([])
  const [navbarPlatforms, setNavbarPlatforms] = useState([])

  useEffect(() => {
    async function getMostRecentGames(){
      const apiData = await gamesAPI.getMostRecentGames()
      setRecentGames(apiData.results)
    }
    async function getGenres(){
      const apiData = await gamesAPI.getGenres()
      setGenres(apiData.results)
    }
    async function getPlatformData(){
      const apiData = await gamesAPI.getPlatformData()
      setNavbarPlatforms(apiData.results.slice(0,-6))
    }

    getMostRecentGames()
    getGenres()
    getPlatformData()
  }, [])
  


  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} navbarPlatforms={navbarPlatforms} />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home recentGames={recentGames} genres={genres}/>} />
          <Route path="/genres/:genre" element={<GameGenre />} />
          <Route path="/games/:gameId" element={<SingleGamePage />} />
          <Route path="/signin" element={<AuthPage setUser={setUser} />} />
          <Route path="/platforms/:platform" element={<PlatformGames navbarPlatforms={navbarPlatforms} />} />
          <Route path="/myprofile" element={<MyProfile user={user} />} />
        </Routes>
      </SmoothScroll>
      <Footer />
    </main>
  );
}

export default App;