import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

interface DataObject {
  id: number;
  doc_name: string;
  address: string;
  amount: string;
  lat: number;
  lng: number;
  icons: string;
  total_review: string;
}

const data: DataObject[] = [
  {
    id: 1,
    doc_name: "Place perfect for nature",
    address: "122-140 N Morgan St, Chicago, IL 60607, USA",
    amount: "$1,400",
    lat: 53.470692,
    lng: -2.220328,
    icons: "assets/img/product/product-1.jpg",
    total_review: "17",
  },
  {
    id: 2,
    doc_name: "Place perfect for nature",
    address: "470 Park Ave S, New York, NY 10016",
    amount: "$1,400",
    lat: 53.469189,
    lng: -2.199262,
    icons: "assets/img/product/product-2.jpg",
    total_review: "17",
  },
];


const ShowDetails = (object: DataObject) => {
  return (
    <div
      className="profile-widget"
      style={{
        width: 276,
        // Add background style
      }}
    >
      <div className="pro-content">
        <h3 className="title">
          <Link to="#"> {object.doc_name} </Link>
        </h3>

        <ul className="available-info">
          <li className="mapaddress">
            <i className="fas fa-map-marker-alt me-2" /> {object.address}{" "}
          </li>

          <li className="map-amount">
            {object.amount}
            <span className="d-inline-block average-rating">
              {" "}
              ({object.total_review})
            </span>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

const ShowMap = () => {
  
  const [center, setCenter] = useState({
    lat: 53.470692,
    lng: -2.220328,
  });
  const [zoom, setZoom] = useState(11);
  const [list, setList] = useState<DataObject[]>([]); // Specify type for list state
  const [selectIndex, setSelectIndex] = useState<number | null>(null); // Specify type for selectIndex state

  useEffect(() => {
    setList(data);
  }, []);

  const AnyReactComponent = ({
    lat,
    lng,
    currentIndex,
    object,
  }: {
    lat: number;
    lng: number;
    currentIndex: number;
    object: DataObject;
  }) => (
    <div style={{ color: "white" }}>
      {currentIndex === selectIndex && ShowDetails(object)}
      <img
        onClick={() => setSelectIndex(currentIndex)}
        src={object.icons} // Change icon to object.icons
        alt=""
      />
    </div>
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key:
            "AIzaSyCj51aGIAt-Yue3rjWoYz1FZYq8wB6jCIY",
        }}
        defaultCenter={{ lat: 53.470692, lng: -2.220328 }}
        defaultZoom={11}
      >
        {list?.length > 0 &&
          list.map((obj, index) => (
            <AnyReactComponent
              key={index} // Add a unique key
              lat={obj.lat}
              lng={obj.lng}
              currentIndex={index}
              object={obj}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default ShowMap;