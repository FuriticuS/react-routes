import {useNavigate} from "react-router-dom";

export default function Cart(){
  const navigate = useNavigate()

  return (
    <div>
      <h1>Cart page</h1>
      <button onClick={() => navigate('/thanks')}>Go to home page</button>
    </div>
  )
}