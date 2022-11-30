import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'

const GameGenreList = ({ genres }) => {

  // First 6 categories that will be displayed in cards
    const popularGenres = genres.map((genre, idx) => (
      <Link to={`/genres/${genre.slug}`} key={idx}>
        <div
          className="border-4"
          style={{background: `url(${genre.image_background}) center / cover no-repeat`, height: '40vh', width: '48vw'}}
          >
          <div className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-700 md:text-5xl lg:text-6xl lg:max-w-full">{genre.name}</div>
        </div>
      </Link>)).slice(0, -13)

  return (
    <>
    <div className="flex flex-wrap justify-center">
      <hr />
      {popularGenres}
    </div>
    <div className="flex border-t-4 max-w-l justify-center">
      <hr />
      <Carousel genres={genres}/>
    </div>
    </>
  )
}

export default GameGenreList