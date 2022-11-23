

const GameAd = ({ recentGames }) => {
    const ad = recentGames[0]?.name
  return (
    <div>
        <hr />
        {ad}
    </div>
  )
}

export default GameAd