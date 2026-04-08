import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectHome = setTimeout( () => navigate('/', {replace: true}), 3000)

    return () => clearTimeout(redirectHome)
  })

  return (
    <div>Thanks for you buy product, you redirect on home page on 3 seconds...</div>
  )
}