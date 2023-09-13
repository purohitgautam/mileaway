import SingleProduct from "../../../components/singleProduct/SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactComponent as ArrowLeft } from "../../../images/arrow-right (1).svg";
import { ReactComponent as ArrowRight } from "../../../images/arrow-right.svg";

export default function ProductWithType({
  products,
  arrowLeftClassName,
  arrowRightClassName,
  prev,
  next,
}) {
  return (
    <div className="products-with-type">
      <div className="type">
        <h3 className="type-name">Sky</h3>
        <div className="sliders">
          <ArrowLeft className={arrowLeftClassName} />
          <ArrowRight className={arrowRightClassName} />
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={35}
          slidesPerView={4}
          grabCursor={true}
          // loop={true}
          // slidesPerGroup={4}
          navigation={{
            prevEl: prev,
            nextEl: next,
            disabledClass: "disabled_swiper_button",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          className="swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <SingleProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex-justify-center">
        <button className="button">View All Products</button>
      </div>
    </div>
  );
}
