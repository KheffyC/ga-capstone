
const GameCategories = ({ genres }) => {
    const popularGenres = genres.map(genre => (<div key={genre.name}>{genre.name}</div>)).slice(0, -13)
    const lesserGenres = genres.map(genre => (<div key={genre.name}>{genre.name}</div>)).slice(-13)
    console.log(lesserGenres, 'huh')
  return (
    <div>
      <hr />
      {popularGenres}
    </div>
  )
}

export default GameCategories