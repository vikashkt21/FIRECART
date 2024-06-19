import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useEffect, useState, } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import SingleProduct from "./pages/Singleproduct/SingleProduct";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const [cart, setCart] = useState([]);
  const [promocode, setPromoCode] = useState("");

  const [invalid, setInavalid] = useState("Invalid Promod Code");

  const [discount, seDiscount] = useState(0);

  const [userName, setUserName] = useState("");

  // addd to cart

  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);

    if (isProductExist) {
      const upDateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCart(upDateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added to cart");

    }
  };

  // increase quantity
  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(incQuantity);
  };

  // decrese quantity
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(decQuantity);
  };

  // handle remove

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  // calculate total price

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);

    return totalPrice - discount;
  };

  // promocode

  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      seDiscount(getTotalPrice() * 0.1);
      setPromoCode("");
      setInavalid("");
    } else {
      setInavalid("Invalid Promod Code");
    }
  };

  // username display

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      <div className=" overflow-hidden">
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart}/>} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleDec={handleDec}
                  handleInc={handleInc}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  applyPromoCode={applyPromoCode}
                  promocode={promocode}
                  setPromoCode={setPromoCode}
                  invalid={invalid}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<AllProducts AddToCart={AddToCart} />}
            />
                   <Route
              path="/about"
              element={<About />}
            />
               <Route
              path="/contact"
              element={<Contact />}
            />
                   <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/singleProduct/:productId"
              element={<SingleProduct AddToCart={AddToCart} />}
            />

            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
