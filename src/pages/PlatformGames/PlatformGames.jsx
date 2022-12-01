import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import ReusableCard from "../../components/ReusableCard/ReusableCard"
import * as gamesAPI from '../../utilities/game-api'

const PlatformGames = () => {
    const { platform } = useParams()
    const [allPlatformGames, setAllPlatformGames] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
      async function getAllPlatformGames(platformId){
          setLoading(true)
          const apiData = await gamesAPI.getAllPlatformGames(platformId)
          setAllPlatformGames(apiData.results)
          setLoading(false)
      }
      getAllPlatformGames(platform)
    }, [platform])
    
  return (
    <div className="min-h-screen">
      { loading ? 
        <div>Loading...</div>
        :
        <div className="flex flex-wrap justify-center mt-10 items-end">
            {allPlatformGames.map((game, idx) => (<Link key={idx} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>))}
        </div>
    }
    </div>
  )
}

export default PlatformGames