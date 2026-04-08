import {products} from "../data/data.js";
import {Link, useParams, useSearchParams} from "react-router-dom";

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cat = useParams()

  const maxPrice = searchParams.get('maxValue') ? searchParams.get('maxValue') : Infinity;

  const categoryArray = products.filter(product => product.categoryId.toLowerCase() === cat.categoriesId && product.price <= +maxPrice);

  function searchPrice(e) {
    const value = e.target.value;
    setSearchParams(value ? {maxValue: value} : {})
  }

  return (
    <div>
        <h1>Category {cat.categoriesId}</h1>

        <div>
          <input
            type="number"
            value={searchParams.get('maxValue') || ""}
            onChange={searchPrice}/>
        </div>

      {categoryArray.length > 0 ?
        <ul className="category">
          {categoryArray.map(item =>
            <li key={item.id}>
              <Link to={`/product-details/${item.id}`} className="category-item">
                <img src={item.img} alt={item.name}/>
                <span>{item.name}</span>
                <span>{item.price} $</span>
              </Link>
            </li>
          )}
        </ul> : 'Product not found'}
    </div>
  )
}