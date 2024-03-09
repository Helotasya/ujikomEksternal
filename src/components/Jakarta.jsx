import React from 'react';
import '../components/style/jakarta.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/jakarta.css'
import imgSwiper from '../components/OUTLETS/interior (1).jpg'
import imgSwiper1 from '../components/OUTLETS/interior (2).jpg'
import imgSwiper2 from '../components/OUTLETS/interior (3).jpg'
import imgSwiper3 from '../components/OUTLETS/interior (4).jpg'
import imgSwiper4 from '../components/OUTLETS/interior (5).jpg'
import imgSwiper5 from '../components/OUTLETS/interior (6).jpg'
import imgSwiper6 from '../components/OUTLETS/interior (7).jpg'
import imgSwiper7 from '../components/OUTLETS/interior (8).jpg'
import imgSwiper8 from '../components/OUTLETS/interior (9).jpg'
import wagyu from '../components/MENU/wagyu.jpg'
import croisand from '../components/MENU/croisand.jpg'
import sweet from '../components/MENU/SweetChandlles.jpg'
import drink from '../components/MENU/paredise.jpg'
import Places from "../components/PLACE/tempat.jpg"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Jakarta = () => {
    return (
        <>
            <img className="for-place" src={Places} alt="" />
            <div className="swiper-container">
                <div className="break-page"></div>
                <div className="kotak1">
                    <h1>Bonjour!</h1>
                    <br />
                    <p>
                        From Los Angeles to Jakarta, NOW OPEN, THE PARVIZ'S JAKARTA! Located at Urban Farm, Golf Island, PIK, North Jakarta, now you can enjoy the authentic American Germany Hamburgers Cafe.
                    </p>
                </div>
                <div className="swiper-all">
                    <div className="kotak-swiper">
                        <div className="jarak">
                            <p>The Parvis'z Jakarta</p>
                        </div>
                    </div>
                    <Swiper className="MySwiper" navigation={true} modules={[Navigation]}>
                        <SwiperSlide><img src={imgSwiper} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper6} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper7} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={imgSwiper8} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="text-solo">
                    <p>Find our beloved signature pastries and sweets and don’t forget to try our Jakarta Exclusive Menu:</p>
                </div>
            </div>
            <div className="gamhias">
                <div className="gam">
                    <img src={wagyu} alt="" />
                    <div className="bar">
                        <p>Wagyu Beef Bourguignon – 160K</p>
                    </div>
                </div>
                <div className="gam">
                    <img src={croisand} alt="" />
                    <div className="bar">
                        <p>Wagyu Beef Croissandwich – 68K</p>
                    </div>
                </div>
                <div className="gam">
                    <img src={sweet} alt="" />
                    <div className="bar">
                        <p>Sweet Candelles (2 Croissant, 2 Mini Tarts, 1 Crème Brûlée) – 120K</p>
                    </div>
                </div>
                <div className="gam">
                    <img src={drink} alt="" />
                    <div className="bar">
                        <p>Summer Paradise – 45K</p>
                    </div>
                </div>
            </div>
            <div className="alamat-icon">
                <div className="head">
                <p>
                and many more! Click <span>here</span> to see our full menu.
                </p>
                </div>
               <div className="sub">
               <p>
                    The Parviz's Jakarta
                    <br />
                    <span>Get Direction Now</span>
                </p>
               </div>
                <div className="badan">
                <p>
                    🧭 Everyday, 07.00 – 22.30
                    <br />
                    📍 Urban Farm, Golf Island, PIK
                    <br />
                    We are currently serving DINE-IN and TAKEAWAY only.
                    <br />
                    No RSVP
                </p>
                </div>
            </div>
        </>
    )
}
export default Jakarta