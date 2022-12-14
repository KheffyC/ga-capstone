import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service';
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home'
import GameGenre from '../GameGenre/GameGenre'
import GameTag from '../GameTag/GameTag';
import SingleGamePage from '../SingleGamePage/SingleGamePage';
import AuthPage from '../AuthPage/AuthPage'
import PlatformGames from '../PlatformGames/PlatformGames';
import MyProfile from '../MyProfile/MyProfile';
import Footer from '../../components/Footer/Footer';
import * as gamesAPI from '../../utilities/game-api'
import * as profilesAPI from '../../utilities/profile-api'
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [user, setUser] = useState(getUser())
  const [updatedProfile, setUpdatedProfile] = useState({})
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
    async function getProfile(){
      const profile = await profilesAPI.getProfile()
      setUpdatedProfile(profile)
    }
    if (user){
      getMostRecentGames()
      getGenres()
      getPlatformData()
      getProfile()
    }
  }, [user])
  


  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} navbarPlatforms={navbarPlatforms} />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home recentGames={recentGames} genres={genres} user={user}/>} />
          <Route path="/genres/:genre" element={<GameGenre />} />
          <Route path="/tags/:tag" element={<GameTag />} />
          <Route path="/games/:gameId" element={<SingleGamePage setUpdatedProfile={setUpdatedProfile} updatedProfile={updatedProfile} />} />
          <Route path="/signin" element={<AuthPage setUser={setUser} />} />
          <Route path="/platforms/:platform" element={<PlatformGames />} />
          <Route path="/search/:search" element={<SearchResults />} />
          <Route path="/myprofile" element={<MyProfile user={user} updatedProfile={updatedProfile} />} />
        </Routes>
      </SmoothScroll>
      <Footer />
    </main>
  );
}

export default App;