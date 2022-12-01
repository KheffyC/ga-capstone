import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as gamesAPI from '../../utilities/game-api'
import ReusableCard from "../../components/ReusableCard/ReusableCard"

const SearchResults = () => {
    const [searchCatalog, setSearchCatalog] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)

    const { search } = useParams()

    useEffect(() => {
     async function getSearchCatalog(param, pageNumber=1){
        setLoading(true)
        const apiData = await gamesAPI.getSearchCatalog(param, pageNumber)
        setSearchCatalog(apiData)
        setLoading(false)
     }
    getSearchCatalog(search, pageNumber)  
    }, [search, pageNumber])
    
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
    <div className="min-h-screen">
        {loading ?
            <div>Loading...</div>
        :
            <>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">'{search.toUpperCase()}'</h1>
                <div className='flex flex-wrap mt-10 justify-center items-end'>{searchCatalog.results?.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
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

export default SearchResults