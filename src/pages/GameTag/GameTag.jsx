import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
import ReusableCard from '../../components/ReusableCard/ReusableCard'
import * as gamesAPI from '../../utilities/game-api'

const GameTag = () => {
    const [tagCatalog, setTagCatalog] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)

    let { tag } = useParams()

    useEffect(() => {
        async function getTagCatalog(tag, pageNumber=1){
            setLoading(true)
            const apiData = await gamesAPI.getTagCatalog(tag, pageNumber)
            setTagCatalog(apiData.results)
            setLoading(false)
        }
        getTagCatalog(tag, pageNumber)
    }, [tag, pageNumber])

    const handleNextPage = () => {
        setPageNumber(() => pageNumber + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })    
    }

    const handlePrevPage = () => {
        if (pageNumber === 1) return 
        setPageNumber(() => pageNumber - 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className='min-h-screen'>
        { loading ?
            <div>Loading...</div>
        :
        <>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">{tag.toUpperCase()}</h1>
            <div className='flex flex-wrap mt-10 justify-center items-end'>{tagCatalog.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
            {pageNumber > 1 ?
                <button onClick={handlePrevPage} className="bg-blue-700">Previous Page</button>
                :
                <></>
            }
            <button onClick={handleNextPage} className="bg-blue-700">Next Page</button>
        </>
        }
    </div>
    )
}

export default GameTag