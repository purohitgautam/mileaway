import { ReactComponent as LeftArrow } from "../../../images/Group 303.svg";
import { ReactComponent as RightArrow } from "../../../images/Group 436.svg";
import { ReactComponent as HangoutsIcon } from "../../../images/Group 185.svg";
import Rating from "../../../components/rating/Rating";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Users() {
  const users = [
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Ellipse 13.png",
      name: "username",
      stars: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
  ];

  return (
    <div className="users">
      <LeftArrow className="left-arrow" />
      <ul className="carousel">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
          slidesPerView={3}
          navigation={{ prevEl: ".left-arrow", nextEl: ".right-arrow" }}
          // pagination={{ clickable: true }}
          // scrollbar={{ hide: true }}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="users-swiper"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <li className="user">
                <div className="image">
                  <img
                    src={require("../../../images/Ellipse 13.png")}
                    alt="img"
                    draggable="false"
                  />
                  <HangoutsIcon className="hangouts" />
                </div>
                <h2 className="username">{user.name}</h2>
                <Rating stars={user.stars} />
                <span className="description">{user.description}</span>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>

      <RightArrow className="right-arrow" />
    </div>
  );
}
