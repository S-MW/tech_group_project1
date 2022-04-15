// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function SimpleScenario() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className="flex justify-center">
                        <div>
                            <img src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg" alt="Girl in a jacket" width="500" height="600" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex justify-center">
                        <div>
                            <img src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg" alt="Girl in a jacket" width="500" height="600" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex justify-center">
                        <div>
                            <img src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg" alt="Girl in a jacket" width="500" height="600" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex justify-center">
                        <div>
                            <img src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg" alt="Girl in a jacket" width="500" height="600" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex justify-center">
                        <div>
                            <img src="https://www.renault.com.sa/CountriesData/Saudi_Arabia_EN/images/conceptcars/renault-concept-car-014_ig_w800_h450.jpg" alt="Girl in a jacket" width="500" height="600" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
