
const Hero = ({ recentGames }) => {
  return (
    <>
        <div className="">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-full">General Assembly Gaming Event</h1>
            <h3 className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">From Nov 19 to Dec 2, get a GA Gift Card when you add 10 or more to your "Already Played" list</h3>
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