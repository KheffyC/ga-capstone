import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
import ReusableCard from '../../components/ReusableCard/ReusableCard'
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
    <>
      <div className='flex flex-wrap mt-10 justify-center items-end'>{genreCatalog.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
    </>
  )
}

export default GameGenre