import { useEffect, useState } from 'react' 
import { useParams, Link } from 'react-router-dom'
import ReusableCard from '../../components/ReusableCard/ReusableCard'
import * as gamesAPI from '../../utilities/game-api'

const GameTag = () => {
    const [tagCatalog, setTagCatalog] = useState([])

    let { tag } = useParams()

    useEffect(() => {
        async function getTagCatalog(tag){
            const apiData = await gamesAPI.getTagCatalog(tag)
            setTagCatalog(apiData.results)
        }
        getTagCatalog(tag)
    }, [tag])


  return (
    <>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white mt-10">{tag.toUpperCase()}</h1>
        <div className='flex flex-wrap mt-10 justify-center items-end'>{tagCatalog.map((game) => <Link key={game.name} to={`/games/${game.id}`}><ReusableCard card={game}/></Link>)}</div>
    </>
    )
}

export default GameTag