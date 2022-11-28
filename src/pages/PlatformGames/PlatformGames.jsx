import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import ReusableCard from "../../components/ReusableCard/ReusableCard"
import * as gamesAPI from '../../utilities/game-api'

const PlatformGames = ({ navbarPlatforms }) => {
    const [selectedPlatformId, setSelectedPlatformId] = useState(null)
    const [allPlatformGames, setAllPlatformGames] = useState([])
    const { platform } = useParams()


    useEffect(() => {
        const selectedParent = navbarPlatforms.filter(parent => parent.slug === platform)
        setSelectedPlatformId(selectedParent[0]?.id)
        async function getAllPlatformGames(platformId){
            const apiData = await gamesAPI.getAllPlatformGames(platformId)
            setAllPlatformGames(apiData.results)
          }

        getAllPlatformGames(selectedPlatformId)
    }, [navbarPlatforms, platform, selectedPlatformId])
    
  return (
    <>
        <div className="flex flex-wrap justify-center mt-10 items-end">
            {allPlatformGames.map((game, idx) => (<Link key={idx} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>))}
        </div>
    </>
  )
}

export default PlatformGames