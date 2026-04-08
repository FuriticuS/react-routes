import {categories} from "../data/data.js";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to={'/categories/electronics'} state={{maxValue: 500}}>Our sale electronics!!!</Link>

      <ul className="category">
        {categories.map(link => <li key={link.id}>
          <Link to={`/categories/${link.id}`} className="category-item">
            <img src={link.img} alt={link.name}/>
            <span>{link.name}</span>
          </Link>
        </li>)}
      </ul>
    </div>
  )
}