import { useSelector } from 'react-redux';
import './App.css';
import AddItems from "./components/AddItems"
import CartItems from "./components/CartItems"
import Navbar from './components/Navbar';

function App() {
  const cartState = useSelector((state) => state.items.showCart)
  console.log('cartState', cartState)
  return (
    <div style={{ backgroundColor: "#444", width: "100%", height: "100vh", position: "relative" }}>
      <Navbar />
      <AddItems />
      {cartState && <CartItems />}
    </div>
  );
}

export default App;
