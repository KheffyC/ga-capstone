
const GameCategories = ({ genres }) => {

  // First 6 categories that will be displayed in cards
    const popularGenres = genres.map(genre => (
      <div
        key={genre.name}
        className="border-4"
        style={{background: `url(${genre.image_background}) center / cover no-repeat`, height: '40vh', width: '48vw'}}
      >
        <div className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-700 md:text-5xl lg:text-6xl lg:max-w-full">{genre.name}</div>
      </div>)).slice(0, -13)


  // Rest of the genres that will be displayed in carousel. 
    const lesserGenres = genres.map(genre => (
      <div
        key={genre.name}
        style={{background: `url(${genre.image_background}) center / cover no-repeat`, height: '40vh', width: '20vw'}}
      >
        {genre.name}
      </div>)).slice(-13)


  return (
    <>
    <div className="flex flex-wrap justify-center">
      <hr />
      {popularGenres}
    </div>
    <div className="flex border-t-4 max-w-full justify-center">
      <hr />
      {lesserGenres}
    </div>
    </>
  )
}

export default GameCategories