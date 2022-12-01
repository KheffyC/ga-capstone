import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
import ReusableCard from '../../components/ReusableCard/ReusableCard'
import * as gamesAPI from '../../utilities/game-api'

const GameGenre = () => {
    const [genreCatalog, setGenreCatalog] = useState([])
    const [loading, setLoading] = useState(false)

    let { genre } = useParams()


    useEffect(() => {
        async function getGenreCatalog(genre){
          setLoading(true)
          const apiData = await gamesAPI.getGenreCatalog(genre)
          setGenreCatalog(apiData.results)
          setLoading(false)
        }
        getGenreCatalog(genre)
    }, [genre])

  return (
    <>
    {loading ? 
      <div className='min-h-screen'>Loading...</div>
    :
      <div className='min-h-screen'>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">{genre.toUpperCase()}</h1>
        <div className='flex flex-wrap mt-10 justify-center items-end'>{genreCatalog.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
        
      </div>
    }
    </>
  )
}

export default GameGenre