import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as gamesAPI from '../../utilities/game-api'
import ReusableCard from "../../components/ReusableCard/ReusableCard"

const SearchResults = () => {
    const [searchCatalog, setSearchCatalog] = useState([])

    const { search } = useParams()

    useEffect(() => {
     async function getSearchCatalog(param){
        const apiData = await gamesAPI.getSearchCatalog(param)
        setSearchCatalog(apiData)
     }
    getSearchCatalog(search)  
    }, [search])
    

  return (
    <>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">'{search.toUpperCase()}'</h1>
        <div className='flex flex-wrap mt-10 justify-center items-end'>{searchCatalog.results?.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
    </>
    )
}

export default SearchResults