import {NavLink} from "react-router-dom";

export function Header() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/categories"}>Categories</NavLink>
        <NavLink to={"/product-details"}>ProductDetails</NavLink>
      </nav>

      <hr/>
    </>
  )
}