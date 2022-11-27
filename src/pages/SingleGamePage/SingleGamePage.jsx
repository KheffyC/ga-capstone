import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gamesAPI from '../../utilities/game-api'

const SingleGamePage = () => {
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



  return (
    <section className="bg-white dark:bg-black">
        <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:items-center">
                <div className="w-full space-y-12 lg:w-1/2 ">
                    <div>
                        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                            <h1 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">{game.name}</h1>
                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 bg-red-700 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-red-700 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-red-700 rounded-full"></span>
                            </div>
                            <div class="mt-6 sm:-mx-2">
                                <div class="inline-flex w-full sm:w-auto sm:mx-2">
                                    <button href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Add to Wishlist
                                    </button>
                                </div>

                                <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                                    <button class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                        Add to Already Played
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:items-start md:-mx-4">
                        <div className="mt-4 md:mx-4 md:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Description</h1>

                            <p className="mt-3 text-gray-500 dark:text-gray-300" onClick={() => setShowMore(!showMore)}>
                            {showMore ? game.description_raw : `${game.description_raw?.substring(0, 250)}...`}
                            </p>
                        </div>
                    </div>
                    <div className="container px-6 py-12 mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{game.rating}</h1>
                                <p>Rating</p>
                            </div>
                            <div>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{game.released}</h1>
                                <p>Released</p>
                            </div>
                            <div>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{game.metacritic}</h1>
                                <p>{game.metacritic ? 'Metascore' : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={`${game.background_image}`} alt="" />
                    </div>
            </div>

            <hr className="my-12 border-gray-200 dark:border-gray-700" />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="h-10 text-gray-500 fill-current dark:text-gray-300" >{game.publishers ? game.publishers.map(publisher => publisher.name) : 'No Publisher Listed'}</div>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="h-10 text-gray-500 fill-current dark:text-gray-300" >{game.esrb_rating ? game.esrb_rating.name : 'No Rating'}</div>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="h-10 text-gray-500 fill-current dark:text-gray-300" >{game.developers ? game.developers.map(developer => developer.name) : 'No Developers Listed'}</div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default SingleGamePage