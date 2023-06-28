import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="search">
          <input type="text" placeholder="Search..." />
          <a style={{paddingTop:"4px"}} href="#">
          <SearchOutlinedIcon />
          </a>
        </div>
        
        <div className="items">
        <a href="#" style={{textDecoration:"none"}}>
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span style={{paddingLeft:"4px"}}>English</span> 
          </div>
          </a>
          <div className="item">
            <button style={{backgroundColor:"white", border:"none", paddingTop:"4px"}}>
            <a href="#">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
            </a>
            </button>
            
          </div>
          <a href="#">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          </a>

          <a href="#">
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          </a>
          <a href="#">
          <div className="item">
          <img
              src="https://i.ibb.co/WtLxk2p/profile.jpg"
              alt=""
              className = "avatar"
            />
          </div>
          </a> 
        </div>
      </div>
    </div>
  );
};


export default Navbar;
