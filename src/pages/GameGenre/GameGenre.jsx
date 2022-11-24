import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import * as gamesAPI from '../../utilities/game-api'

const GameGenre = ({ currentGenre }) => {
    const [genreCatalog, setGenreCatalog] = useState([])

    let { genre } = useParams()


    useEffect(() => {
        async function getGenreCatalog(genre){
            const apiData = await gamesAPI.getGenreCatalog(genre)
            setGenreCatalog(apiData.results)
        }
        getGenreCatalog(genre)
    }, [])

  return (
    <div>{genreCatalog.map((game) => <div key={game.name}>{game.name}</div>)}</div>
  )
}

export default GameGenre