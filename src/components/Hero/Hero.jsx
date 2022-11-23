
const Hero = ({ recentGames }) => {
  return (
    <>
        <div>
            <h1>General Assembly Gaming Event</h1>
            <h3>From Nov 19 to Dec 2, get a GA Gift Card when you add 10 or more to your "Already Played" list</h3>
        </div>
        <br />
        {recentGames.map((game, idx) => (
        <div key={idx}>
            {game.name}
        </div>)).slice(0, -13)}
    </>
  )
}

export default Hero