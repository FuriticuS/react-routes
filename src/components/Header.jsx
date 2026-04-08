import {NavLink} from "react-router-dom";

export function Header() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"} style={{margin: '0 12px'}}>About</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>

      <hr/>
    </>
  )
}