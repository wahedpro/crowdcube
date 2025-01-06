import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <div className="bg-gray-400">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{delay: 2000}}
                loop={true}
                >
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img className="w-full h-full" src="https://i.ibb.co.com/3hWTVHh/1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img className="w-full h-full" src="https://i.ibb.co.com/BBD36k4/2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img className="w-full h-full" src="https://i.ibb.co.com/BCs72n7/3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;