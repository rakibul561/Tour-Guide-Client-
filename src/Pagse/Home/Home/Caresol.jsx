
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../../../assets/iamge/sada pathor.avif'
import bgimg2 from '../../../assets/iamge/beautiful-nature-tropical-beach-sea_74190-6805.jpg'
import bgimg3 from '../../../assets/iamge/hammock_74190-2012.jpg'
import bgimg4 from '../../../assets/iamge/jaflong.avif'
import bgimg5 from '../../../assets/iamge/boat-lake-scene_1150-17962.jpg'
import bgimg6 from '../../../assets/iamge/sasjek.jpg'


export default function Carosel() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={bgimg1}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg2}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg3}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg4}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg5}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg6}></Slide> </SwiperSlide>
      </Swiper>
    </div >
  );
}
