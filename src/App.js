import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import List from "./pages/list/List";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/admin_login/Login"
// import NewHotel from "../../admin/src/pages/newHotel/NewHotel";
// import NewRoom from "../../admin/src/pages/newRoom/NewRoom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/adminhotels" element={<List columns={hotelColumns}/>}/>
        <Route path="/adminRooms" element={<List columns={roomColumns} />}/>
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
