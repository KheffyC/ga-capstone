import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import * as gamesAPI from '../../utilities/game-api'

const PlatformGames = ({ navbarPlatforms }) => {
    const [selectedPlatformId, setSelectedPlatformId] = useState(2)
    const [allPlatformGames, setAllPlatformGames] = useState([])
    const { platform } = useParams()


    useEffect(() => {
        const selectedParent = navbarPlatforms.filter(parent => parent.slug === platform)
        setSelectedPlatformId(selectedParent[0]?.id)
        async function getAllPlatformGames(platformId){
            const apiData = await gamesAPI.getAllPlatformGames(platformId)
            console.log(apiData,'testing in comp page')
            setAllPlatformGames(apiData.results)
          }

        getAllPlatformGames(selectedPlatformId)
    }, [ platform ])
    
  return (
    <>
        <div>
            {allPlatformGames.map((game, idx) => (<div><Link to={`/games/${game.id}`}>{game.name}</Link></div>))}
        </div>
    </>
  )
}

export default PlatformGames