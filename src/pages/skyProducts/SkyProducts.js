import SingleProduct from "../../components/singleProduct/SingleProduct";
import HeroOther from "../../components/heroOther/HeroOther";
import Title from "../../components/title/Title";
import { Pagination } from "@mui/material";
import Search from "../../components/search/Search";
import ProductFilter from "../../components/productFilter/ProductFilter";

export default function SkyProducts() {
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
  console.log(Pagination);

  return (
    <section className="sky-products">
      <HeroOther
        backgroundImage={require("../../images/Rectangle 65 (3).png")}
        title={"Product"}
      />
      <div className="container">
        <div className="search-other">
          <Search filter={<ProductFilter />} />
        </div>
        <Title title={"Sky"} heading={"Product"} />
        <div className="products">
          {skyProducts.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </div>
        <div className="flex-justify-center">
          <Pagination className="pagination" count={23} />
        </div>
      </div>
    </section>
  );
}
