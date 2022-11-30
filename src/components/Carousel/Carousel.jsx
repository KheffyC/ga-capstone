// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel({ genres }) {

    const lesserGenres = genres.map((genre, idx) => (
        <SwiperSlide key={idx} style={{background: `url(${genre.image_background}) center / cover no-repeat`}} >
            <Link to={`genres/${genre.slug}`} >
            <div className="max-w-5xl text-xl font-bold leading-none tracking-tighter text-700 md:text-2xl lg:text-4xl lg:max-w-full h-80">
                {genre.name}
            </div>
            </Link>
        </SwiperSlide>)).slice(-13)
  return (
    <>
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
        {lesserGenres}
      </Swiper>
    </>
  );
}