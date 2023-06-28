import Sidebar from "../../components/admin_sidebar/Adminsidebar";
import Navbar from "../../components/admin_navbar/AdminNavbar";
import "./admin.scss";
import Featured from "../../components/admin_featured/admin_Featured";
import Chart from "../../components/admin_chart/AdminChart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
