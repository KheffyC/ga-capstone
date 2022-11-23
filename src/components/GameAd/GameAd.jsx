

const GameAd = ({ recentGames }) => {
    const ad = recentGames[0]?.name
  return (
    <div style={{background: `url(${recentGames[0]?.background_image})  center center / cover no-repeat`, height: '70vh', }}>
        <div className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-blue-700 md:text-5xl lg:text-6xl lg:max-w-7xl">{ad}</div>
    </div>
  )
}

export default GameAd


