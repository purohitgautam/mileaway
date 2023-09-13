import "./SingleProduct.css";

export default function SingleProduct({ product }) {
  return (
    <div className="single-product">
      <div className="image">
        <img src={require("../../images/SeekPng.png")} alt="product" />
      </div>
      <span className="title">{product.name}</span>
      <span className="description">{product.description}</span>
      <div className="price">
        <span className="discounted-price">{product.discounted_price}</span>
        <span className="original-price">{product.original_price}</span>
      </div>
    </div>
  );
}
