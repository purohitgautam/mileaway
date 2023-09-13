import "./Products.css";
import HeroOther from "../../components/heroOther/HeroOther";
import Title from "../../components/title/Title";
import ProductWithType from "./components/ProductWithType";
import Search from "../../components/search/Search";
import ProductFilter from "../../components/productFilter/ProductFilter";

export default function Products() {
  const skyProducts = [
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 10",
      original_price: "$ 15",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 11",
      original_price: "$ 16",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12",
      original_price: "$ 17",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 13",
      original_price: "$ 18",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 14",
      original_price: "$ 19",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 15",
      original_price: "$ 20",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 16",
      original_price: "$ 21",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 17",
      original_price: "$ 22",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 18",
      original_price: "$ 23",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 19",
      original_price: "$ 24",
    },
  ];
  const waterProducts = [
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 10",
      original_price: "$ 15",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 11",
      original_price: "$ 16",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12",
      original_price: "$ 17",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 13",
      original_price: "$ 18",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 14",
      original_price: "$ 19",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 15",
      original_price: "$ 20",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 16",
      original_price: "$ 21",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 17",
      original_price: "$ 22",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 18",
      original_price: "$ 23",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 19",
      original_price: "$ 24",
    },
  ];
  const landProducts = [
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 10",
      original_price: "$ 15",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 11",
      original_price: "$ 16",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12",
      original_price: "$ 17",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 13",
      original_price: "$ 18",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 14",
      original_price: "$ 19",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 15",
      original_price: "$ 20",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 16",
      original_price: "$ 21",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 17",
      original_price: "$ 22",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 18",
      original_price: "$ 23",
    },
    {
      name: "Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 19",
      original_price: "$ 24",
    },
  ];
  return (
    <div className="products">
      <HeroOther
        backgroundImage={require("../../images/Rectangle 65 (3).png")}
        title={"Product"}
      />
      <div className="container">
        <div className="search-other">
          <Search filter={<ProductFilter />} />
        </div>
        <div className="product-wrapper">
          <Title title={"SELL PRODUCT"} heading={"Product"} />
          <div className="product-with-types-container">
            <div className="type-sections">
              <ProductWithType
                products={skyProducts}
                arrowLeftClassName={
                  "product-swiper-arrow product-with-type-prev-arrow-sky"
                }
                arrowRightClassName={
                  "product-swiper-arrow product-with-type-next-arrow-sky"
                }
                prev={".product-with-type-prev-arrow-sky"}
                next={".product-with-type-next-arrow-sky"}
              />
            </div>
            <div className="type-sections">
              <ProductWithType
                products={waterProducts}
                arrowLeftClassName={
                  "product-swiper-arrow product-with-type-prev-arrow-water"
                }
                arrowRightClassName={
                  "product-swiper-arrow product-with-type-next-arrow-water"
                }
                prev={".product-with-type-prev-arrow-water"}
                next={".product-with-type-next-arrow-water"}
              />
            </div>
            <div className="type-sections">
              <ProductWithType
                products={landProducts}
                arrowLeftClassName={
                  "product-swiper-arrow product-with-type-prev-arrow-land"
                }
                arrowRightClassName={
                  "product-swiper-arrow product-with-type-next-arrow-land"
                }
                prev={".product-with-type-prev-arrow-land"}
                next={".product-with-type-next-arrow-land"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
