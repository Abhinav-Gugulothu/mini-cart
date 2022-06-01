import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch , useSelector } from 'react-redux';
import { caluculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Model from "./components/Model";

function App() {
  const {cartItems} = useSelector((state) => state.cart);
  const {isopen} = useSelector((state) => state.model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(caluculateTotal());
  } , [cartItems])
  return (
    <main>
    {isopen &&  <Model /> }
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
