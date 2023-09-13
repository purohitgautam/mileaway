import Title from "../../../components/title/Title";
import SingleProduct from "../../../components/singleProduct/SingleProduct";

export default function Products() {
  const allProducts = [
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
    {
      image: "../images/SeekPng.png",
      name: "bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      discounted_price: "$ 12.5",
      original_price: "$ 15.5",
    },
  ];
  return (
    <div className="products-home">
      <Title title={"SELL PRODUCT"} heading={"Product"} />
      <div className="all-products">
        {allProducts.map((product, index) => (
          <SingleProduct product={product} key={index} />
        ))}
      </div>
      <div className="view-all-products">
        <button className="button">View All Products</button>
      </div>
    </div>
  );
}
