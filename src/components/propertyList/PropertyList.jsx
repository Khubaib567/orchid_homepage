import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/rooms");

  const images = [
    "https://i.ibb.co/bW0mqq6/deluxe.jpg",
    "https://i.ibb.co/dL0Y0pM/deluxe-twin.jpg",
    "https://i.ibb.co/F8M3jPL/executive.jpg",
    "https://i.ibb.co/dL0Y0pM/deluxe-twin.jpg",
    "https://i.ibb.co/F8M3jPL/executive.jpg"
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.title}</h1>
                  <h2>{data[i]?.desc}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
