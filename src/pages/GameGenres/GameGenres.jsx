import { useEffect, useState } from 'react' 
import * as gamesAPI from '../../utilities/game-api'

const GameGenres = () => {
    const [currentGenre, setCurrentGenre] = useState('')

    useEffect(() => {
        async function getCurrentGenre(){
            const apiData = await gamesAPI.getCurrentGenre()
            setCurrentGenre(apiData.results)
        }
    }, [])

  return (
    <div>Working</div>
  )
}

export default GameGenres