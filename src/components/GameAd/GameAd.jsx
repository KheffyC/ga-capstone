import { Link } from 'react-router-dom'

const GameAd = ({ recentGames }) => {
    const ad = recentGames[0]?.name
  return (
    <div className="border-t-4 border-b-4" style={{background: `url(${recentGames[0]?.background_image})  center center / cover no-repeat`, height: '70vh', width: '100vw' }}>
        <div className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-blue-700 md:text-5xl lg:text-6xl lg:max-w-full">{ad}</div>
        <Link to={`/games/${recentGames[0]?.id}`} className='hover:text-blue-700'>View now  </Link>
    </div>
  )
}

export default GameAd


