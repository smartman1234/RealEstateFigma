import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

const SwiperHandler = ({photos}) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {photos.map((photo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[500px]">
                                <Image src={photo.url} alt="house-picture" layout="fill" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    )
}

export default SwiperHandler
