import "./Home.css";
import Search from "../../components/search/Search";
import Title from "../../components/title/Title";
import Map from "./components/Map";
import HeroHome from "./components/HeroHome";
import Advantures from "./components/Advantures";
import Trendings from "./components/Trendings";
import Products from "./components/Products";
import Plans from "./components/Plans";
import Users from "./components/Users";
import News from "./components/News";
import { ReactComponent as LeftIcon } from "../../images/Group 141.svg";
import { ReactComponent as RightIcon } from "../../images/Group 388.svg";
import { ReactComponent as AddIcon } from "../../images/ic_add.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-home-wrapper">
        <RightIcon className="right-icon" />
        <LeftIcon className="left-icon" />
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation={{ prevEl: ".left-icon", nextEl: ".right-icon" }}
          pagination={{ clickable: true }}
          className="hero-home-swiper"
        >
          <SwiperSlide>
            <HeroHome />
          </SwiperSlide>
          <SwiperSlide>
            <HeroHome />
          </SwiperSlide>
          <SwiperSlide>
            <HeroHome />
          </SwiperSlide>
          <SwiperSlide>
            <HeroHome />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="search-home">
          <Search filter={<AddIcon className="add-icon" />} />
        </div>
        <Advantures />
        <Trendings />
        <Products />
      </div>
      <div className="simple-pricing">
        <h3>Simple, transparent pricing</h3>
        <span>No contracts. No surprise fees</span>
        <div>
          <div className="plan-time">
            <span>Monthly</span>
            <span>Yearly</span>
          </div>
        </div>
      </div>
      <div className="container">
        <Plans />
        <Users />
      </div>
      <Map />
      <div className="container">
        <News />
        <div className="form-home">
          <Title
            title={
              "Join our newsletter to receive tips, inspiration and specials in your inbox"
            }
          />
          <div className="form">
            <form>
              <input type="text" placeholder="Enter name" />
              <input type="email" placeholder="Enter email" />
              <input type="number" placeholder="Enter phone number" />
              <input type="submit" value="Submit" />
            </form>
            <div className="image">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
