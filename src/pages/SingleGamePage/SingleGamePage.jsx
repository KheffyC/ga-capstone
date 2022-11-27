import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gamesAPI from '../../utilities/game-api'

const SingleGamePage = () => {
    const [game, setGame] = useState([])

    const { gameId } = useParams()

    useEffect(() => {
        async function getSingleGameData(gameId){
            const apiData = await gamesAPI.getSingleGameData(gameId)
            setGame(apiData)
        }

        getSingleGameData(gameId)
    }, [gameId])


  return (
    <div>{game.name}</div>
  )
}

export default SingleGamePage