import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gamesAPI from '../../utilities/game-api'
import * as profileAPI from '../../utilities/profile-api'
import ReusableCard from "../../components/ReusableCard/ReusableCard"

const SingleGamePage = ({ setUpdatedProfile, updatedProfile }) => {
    const [showMore, setShowMore] = useState(false)
    const [game, setGame] = useState([])

    const { gameId } = useParams()

    useEffect(() => {
        async function getSingleGameData(gameId){
            const apiData = await gamesAPI.getSingleGameData(gameId)
            setGame(apiData)
        }

        getSingleGameData(gameId)
    }, [gameId])

    const handleWishlist = async() => {

        if (updatedProfile.alreadyPlayed.map(played => played.id).includes(parseInt(gameId))) await removeGameFromPlayed()

        const updatedProfileWishlist = await profileAPI.addGameToWishlist(game)
        setUpdatedProfile(updatedProfileWishlist)
    }

    const removeGameFromWishlist = async() => {
        const removedGameFromWishlist = await profileAPI.removeGameFromWishlist(game)
        setUpdatedProfile(removedGameFromWishlist)
    }

    const handleAlreadyPlayed = async() => {
        
        if(updatedProfile.wishlist.map(wish => wish.id).includes(parseInt(gameId))) await removeGameFromWishlist()

        const updatedProfileAlreadyPlayed = await profileAPI.addGameToAlreadyPlayed(game)
        setUpdatedProfile(updatedProfileAlreadyPlayed)
    }
    
    const removeGameFromPlayed = async() => {
        const removedGameFromPlayed = await profileAPI.removeGameFromPlayed(game)
        setUpdatedProfile(removedGameFromPlayed)
    }


  return (
    <>
        <section className=" dark:bg-black">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white">{game.name}</h1>
                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-red-700 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-red-700 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-red-700 rounded-full"></span>
                                </div>
                                <div className="mt-6 sm:-mx-2">
                                    <div className="inline-flex w-full sm:w-auto sm:mx-2">
                                        { updatedProfile.wishlist?.map(wish => wish.id).includes(parseInt(gameId))
                                        ?
                                        <button onClick={removeGameFromWishlist} className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-green-800 rounded-lg hover:bg-green-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Added to Wishlist
                                        </button>
                                        :
                                        <button onClick={handleWishlist} className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Add to Wishlist
                                        </button>
                                    }
                                    </div>

                                    <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                                        {updatedProfile.alreadyPlayed?.map(played => played.id).includes(parseInt(gameId))
                                        ?
                                        <button onClick={removeGameFromPlayed} className="inline-flex items-center justify-center w-full px-5 py-2 text-white transition-colors duration-150 transform bg-red-700 border-gray-700 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-700 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                            Remove From Already Played
                                        </button>
                                        :
                                        <button onClick={handleAlreadyPlayed} className="inline-flex items-center justify-center w-full px-5 py-2 text-white transition-colors duration-150 transform bg-gray-900 border-gray-700 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-700 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                            Add to Already Played
                                        </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:flex md:items-start md:-mx-4">
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-2xl font-semibold capitalize dark:text-white">Description</h1>

                                <p className="mt-3 dark:text-gray-300" onClick={() => setShowMore(!showMore)}>
                                {showMore ? game.description_raw : `${game.description_raw?.substring(0, 250)}...`}
                                </p>
                            </div>
                        </div>
                        <div className="container px-6 py-12 mx-auto">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div>
                                    <h1 className="mt-4 text-xl font-semibold dark:text-white">{game.rating} / 5</h1>
                                    <p>Rating</p>
                                </div>
                                <div>
                                    <h1 className="mt-4 text-xl font-semibold dark:text-white">{game.released}</h1>
                                    <p>Released</p>
                                </div>
                                <div>
                                    <h1 className="mt-4 text-xl font-semibold dark:text-white">{game.publishers ? game.publishers.map(pub => pub.name) : ''}</h1>
                                    <p>Publisher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={`${game.background_image}`} alt="" />
                        </div>
                </div>
            </div>
        </section>
        <hr />
        <div className="mt-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Buy Now</h1>
            <div className="flex flex-wrap justify-center">
                {game.stores?.map(store => store.store).map(s => <ReusableCard key={s.id} card={s} />)}
            </div>
        </div>
        <hr />
        <div className="mt-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Meet the Developers</h1>
            <div className="flex flex-wrap justify-center">
                {game.developers?.map((developer, idx) => <ReusableCard key={idx} card={developer}/>)}
            </div>
        </div>
        <hr />
        <div className="mt-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Available on</h1>
            <div className="flex flex-wrap justify-center">
                {game.platforms?.map((platform, idx) => <ReusableCard key={idx} card={platform.platform}/>)}
            </div>
        </div>
        <hr />
        <div className="mt-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Genres</h1>
            <div className="flex flex-wrap justify-center">
                {game.genres?.map((genre, idx) => <ReusableCard key={idx} card={genre}/>)}
            </div>
        </div>
        <hr />
        <div className="mt-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Search Similar Games by Tag</h1>
            <div className="flex flex-wrap justify-center">
                {game.tags?.map((tag, idx) => <ReusableCard key={idx} card={tag}/>)}
            </div>
        </div>
        
    </>
  )
}

export default SingleGamePage