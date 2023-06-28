import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels/countByCity?cities=Karachi,Lahore,Islamabad"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://wpassets.graana.com/blog/wp-content/uploads/2022/03/125163cfba8d1d6bd08cbc604bc946bd.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Karachi</h1>
              <h2>{data[0]} hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2021/01/11/2423961-709857359.jpg?itok=pY4_CaxG"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lahore</h1>
              <h2>{data[1]} hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://rising-pakistan.com/wp-content/uploads/2020/10/Faisal-Mosque-Birds-Eye-View.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Islamabad</h1>
              <h2>{data[2]} hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
