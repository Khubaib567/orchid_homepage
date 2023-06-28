import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">ORCHIDSCOTTAGEHOTEL.COM</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/adminlogin"><button className="navButton">Admin Panel</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
            {/* Register is to be make on future */}
            <Link to="/register"><button className="navButton">Register</button></Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
