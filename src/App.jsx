import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";
import Venue from "./pages/venue/Venue";
import Detail_lapangan from "./pages/detail_lapangan/Detail_lapangan";
import Checkout_Payment from "./pages/checkout_payment/Checkout_Payment.jsx";
import Booking from "./pages/booking"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/detail-lapangan" element={<Detail_lapangan />} />
        <Route path="/checkout-payment" element={<Checkout_Payment />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
