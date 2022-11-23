
const GameCategories = ({ genres }) => {
  // First 6 categories that will be displayed in cards
    const popularGenres = genres.map(genre => (<div key={genre.name}>{genre.name}</div>)).slice(0, -13)
  // Rest of the genres that will be displayed in carousel. 
    const lesserGenres = genres.map(genre => (<div key={genre.name}>{genre.name}</div>)).slice(-13)
  return (
    <div>
      <hr />
      {popularGenres}
    </div>
  )
}

export default GameCategories