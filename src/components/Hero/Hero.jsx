import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const Hero = ({ recentGames }) => {
  
  const heroCarousel = recentGames.map((game, idx) => (
    <SwiperSlide key={idx} style={{background: `url(${game.background_image}) center / cover no-repeat`}}>
      <Link to={`/games/${game.id}`} >
        <div className=" w-48 h-60 flex-end relative">
          <div className="absolute bottom-0 left-auto max-w-5xl text-xl font-bold leading-none tracking-tighter text-white md:text-l lg:text-xl lg:max-w-full">
            {game.name}
          </div>
        </div>
      </Link>
    </SwiperSlide>))

  return (
    <div className="h-4/5 mt-32">
        <div className="">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-full">General Assembly Gaming Event</h1>
            <h3 className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">From Nov 19 to Dec 2, get a GA Gift Card when you add 10 or more to your "Already Played" list</h3>
            <Link to="" className='hover:text-blue-700'>Get an early look  </Link>
        </div>
        <br />
        <div className="flex justify-around mb-32 mt-40 ">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-10 mb-10"
        >
          {heroCarousel}
          </Swiper>
        </div>
    </div>
  )
}

export default Hero