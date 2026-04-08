import {products} from "../data/data.js";
import {Link, useParams} from "react-router-dom";

export default function Categories() {
  const cat = useParams()
  const categoryArray = products.filter(product => product.categoryId.toLowerCase() === cat.categoriesId)

  return (
    <div>
      {categoryArray.length > 0 ? <>
        <h1>Category {cat.categoriesId}</h1>
        <ul className="category">
          {categoryArray.map(item =>
            <li key={item.id}>
              <Link to={`/product-details/${item.id}`} className="category-item">
                <img src={item.img} alt={item.name}/>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </Link>
            </li>
          )}
        </ul>
      </> : <p>404 page not found</p>}

    </div>
  )
}