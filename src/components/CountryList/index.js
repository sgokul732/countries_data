import React from "react";
import CountryCard from "../CountryCard";

import loading from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import "./style.css";
const CountryList = (props) => {
  if (props.loading || !props.data)
    return <img className="full" src={loading} alt="Loading" />;
  if (props.error || !props.data.length)
    return <img className="full" src={noData} alt="No Data Available" />;

  return (
    <>
      <h5 className="res">Showing {props.data.length} Countries</h5>
      <hr></hr>
      <div className="card1">
        {props.data.map((item, index) => (
          <CountryCard item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default CountryList;
