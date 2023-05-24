import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"



const OrderOnline = () => {
    return (
        <div className="max-w-6xl mx-auto my-20">
            <SectionTitle title={"Order Online"} subTitle={"From 11.00 AM to 10.00 PM"}></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;