import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
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
    <div>{genreCatalog.map((game) => <div key={game.name}><Link to={`/games/${game.id}`}>{game.name}</Link></div>)}</div>
  )
}

export default GameGenre