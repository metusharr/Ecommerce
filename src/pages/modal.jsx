import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Play, Pause } from "lucide-react";

const sections = [
  {
    title: "Under ₹499 | Deals on home improvement essentials",
    link: "Explore all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
        text: "Under ₹199 | Cleaning supplies",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
        text: "Under ₹399 | Bathroom accessories",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        text: "Under ₹499 | Home tools",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        text: "Under ₹499 | Home tools",
      },
      ,
    ],
  },
  {
    title: "Automotive essentials | Up to 60% off",
    link: "See more",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Cleaning accessories",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
        text: "Tyre & rim care",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
        text: "Helmets",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
        text: "Helmets",
      },
      ,
    ],
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    link: "See more",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_1._SY116_CB804135937_.jpg",
        text: "Starting ₹199 | Bedsheets",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpg",
        text: "Starting ₹199 | Curtains",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
        text: "40% off | Ironing boards",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
        text: "40% off | Ironing boards",
      },
      ,
    ],
  },
  {
    title: "Get your desired TV screen size | Starting ₹6,999",
    link: "See all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        text: "Budget TVs | No Cost EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpgg",
        text: "4K TVs | 24 months EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      ,
    ],
  },
  {
    title: "Get your desired TV screen size | Starting ₹6,999",
    link: "See all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        text: "Budget TVs | No Cost EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpgg",
        text: "4K TVs | 24 months EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      ,
    ],
  },
  {
    title: "Get your desired TV screen size | Starting ₹6,999",
    link: "See all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        text: "Budget TVs | No Cost EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpgg",
        text: "4K TVs | 24 months EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      ,
    ],
  },
  {
    title: "Get your desired TV screen size | Starting ₹6,999",
    link: "See all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        text: "Budget TVs | No Cost EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpgg",
        text: "4K TVs | 24 months EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      ,
    ],
  },
  {
    title: "Get your desired TV screen size | Starting ₹6,999",
    link: "See all",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        text: "Budget TVs | No Cost EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/PC_MSO_186x116_4._SY116_CB804135937_.jpgg",
        text: "4K TVs | 24 months EMI",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
        text: "Big Screens | Free installation",
      },
      ,
    ],
  },
];

export default function DealsSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-50">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <h2 className="text-lg font-bold mb-3">{section.title}</h2>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {section.items.map((item, i) => (
                <div key={i} className="text-sm text-gray-700">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-20 object-cover rounded"
                  />
                  <p className="mt-1">{item.text}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline mt-auto"
            >
              {section.link}
            </a>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[50vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />

        <button
          onClick={togglePlay}
          className={`
          absolute inset-0 flex items-center justify-center
          text-white bg-black/30  p-6  transition
          ${playing ? "opacity-0 " : "opacity-50"}
        `}
        >
          <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/40 backdrop-blur-md shadow-lg">
            {playing ? (
              <Pause  size={48} className="text-white" />
            ) : (
              <Play size={48} className="text-white" />
            )}
          </span>{" "}
        </button>
      </div>
      <div>
        <div className="mt-10 px-6">
          <h2 className="text-xl font-bold mb-4">
            Related to items you've viewed
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-lg"
          >
            <SwiperSlide>
              <img
                src="https://m.media-amazon.com/images/I/71XKTOveGzL._AC_SY200_.jpg"
                alt="Banner 1"
                className="w-full h-60 object-cover rounded-lg shadow"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://m.media-amazon.com/images/I/61eatQstHtL._AC_SY200_.jpg"
                alt="Banner 2"
                className="w-full h-60 object-cover rounded-lg shadow"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://m.media-amazon.com/images/I/71XKTOveGzL._AC_SY200_.jpg"
                alt="Banner 3"
                className="w-full h-60 object-cover rounded-lg shadow"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://m.media-amazon.com/images/I/61eatQstHtL._AC_SY200_.jpg"
                alt="Banner 4"
                className="w-full h-60 object-cover rounded-lg shadow"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://m.media-amazon.com/images/I/61eatQstHtL._AC_SY200_.jpg"
                alt="Banner 4"
                className="w-full h-60 object-cover rounded-lg shadow"
              />
            </SwiperSlide>
          </Swiper>
         
         
      
        </div>
      </div>
    </>
  );
}
