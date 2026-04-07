import {useParams} from "react-router-dom";
import {products} from "../data/data.js";

export default function ProductDetails() {
  const {productId} = useParams();
  const product = products.find( item => item.id.toString() === productId);
  return (
    <div>
      <h1>Product Details</h1>

      <div className="category-item">
        <img src={product.img} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  )
}