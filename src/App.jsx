import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Venue from "./pages/venue/Venue";
import Detail_lapangan from "./pages/detail_lapangan/Detail_lapangan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/detail-lapangan" element={<Detail_lapangan />} />
      </Routes>
    </>
  );
}

export default App;
