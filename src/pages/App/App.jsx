import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home'
import AuthPage from '../AuthPage/AuthPage'
import Footer from '../../components/Footer/Footer';
import * as gamesAPI from '../../utilities/game-api'


function App() {
  const [user, setUser] = useState(getUser())
  const [data, setData] = useState([])
  const [recentGames, setRecentGames] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const platformsRef = useRef([])


  useEffect(() => {
    async function getGames(){
      const apiData = await gamesAPI.getGames()
      setData(apiData.results)
    }

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
      setPlatforms(apiData.results)
      platformsRef.current = apiData.results.map(platform => platform.name).slice(0, -6)
      console.log(platformsRef.current, 'should work')
    }


    getGames()
    getMostRecentGames()
    getGenres()
    getPlatformData()
  }, [])
  


  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} platforms={platformsRef.current} />
      <Routes>
        <Route path="/" element={<Home recentGames={recentGames} genres={genres}/>} />
        <Route path="/signin" element={<AuthPage setUser={setUser} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;