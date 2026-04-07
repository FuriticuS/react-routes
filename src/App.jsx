import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Categories from "./pages/Categories.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";

// const router = createBrowserRouter([
//   {path: '/', element: (<><Header/><Home/></>)},
//   {path: 'about', element: (<><Header/><About/></>)},
//   {path: 'cart', element: (<><Header/><Cart/></>)},
//   {path: 'categories', element: (<><Header/><Categories/></>)},
//   {path: 'product-details', element: (<><Header/><ProductDetails/></>)},
//   {path: '*', element: (<><Header/><NotFound/></>)},
// ])

const router = createBrowserRouter([
  {path: "/", element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "cart", element: <Cart/>},
      {path: "categories/:categoriesId", element: <Categories/>},
      {path: "product-details/:productId", element: <ProductDetails/>},
      {path: "*", element: <NotFound/>},
    ]},
])

export function App() {
  return (
    <RouterProvider router={router}/>
  )
}
