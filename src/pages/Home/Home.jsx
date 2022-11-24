import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import GameAd from '../../components/GameAd/GameAd'
import GameDetails from '../../components/GameDetails/GameDetails'
import GameGenreList from '../../components/GameGenreList/GameGenreList'

const Home = ({ recentGames, genres }) => {

  const randomNum = Math.floor(Math.random() * recentGames.length)
  const singleGame = recentGames[randomNum]

  return (
    <>
        <Hero recentGames={recentGames} />
        <GameAd recentGames={recentGames} />
        <GameDetails singleGame={singleGame}/>
        <GameGenreList genres={genres} />
    </>
  )
}

export default Home