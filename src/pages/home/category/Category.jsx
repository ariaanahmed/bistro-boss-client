import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import categoryImg1 from '../../../assets/home/slide1.jpg'
import categoryImg2 from '../../../assets/home/slide2.jpg'
import categoryImg3 from '../../../assets/home/slide3.jpg'
import categoryImg4 from '../../../assets/home/slide4.jpg'
import categoryImg5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={categoryImg1} alt="" />
                <h2 className="text-2xl uppercase text-center -mt-16 text-black font-bold">Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={categoryImg2} alt="" />
                <h2 className="text-2xl uppercase text-center -mt-16 text-white font-bold">Pizzas</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={categoryImg3} alt="" />
                <h2 className="text-2xl uppercase text-center -mt-16 text-black font-bold">Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={categoryImg4} alt="" />
                <h2 className="text-2xl uppercase text-center -mt-16 text-black font-bold">desserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={categoryImg5} alt="" />
                <h2 className="text-2xl uppercase text-center -mt-16 text-black font-bold">Salads</h2>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;