import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
import ReusableCard from '../../components/ReusableCard/ReusableCard'
import * as gamesAPI from '../../utilities/game-api'

const GameGenre = () => {
    const [genreCatalog, setGenreCatalog] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)

    let { genre } = useParams()


    useEffect(() => {
        async function getGenreCatalog(genre, pageNumber=1){
          setLoading(true)
          const apiData = await gamesAPI.getGenreCatalog(genre, pageNumber)
          setGenreCatalog(apiData.results)
          setLoading(false)
        }
        getGenreCatalog(genre, pageNumber)
    }, [genre, pageNumber])

    const handleNextPage = () => {
      setPageNumber(() => pageNumber + 1)
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }
  
  const handlePrevPage = () => {
      if(pageNumber === 1) return 
      setPageNumber(() => pageNumber - 1)
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }


  return (
    <div className='min-h-screen mb-20 mt-10'>
      {loading ? 
        <div className='min-h-screen'>Loading...</div>
      :
        <>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">{genre.toUpperCase()}</h1>
          <div className='flex flex-wrap mt-10 justify-center items-end'>{genreCatalog.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
          {pageNumber > 1 ?
              <div onClick={handlePrevPage} class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-black bg-gray-700 border border-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                Previous
              </div>
              :
              <></>
          }
              <div onClick={handleNextPage} class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-black bg-gray-700 border border-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                  Next
                  <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
        </>
      }
    </div>
  )
}

export default GameGenre