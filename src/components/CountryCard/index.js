import React, { useState } from "react";

import noData from "../../assets/images/no-data.png";
import CountryInfo from "../countryInfo";

import "./style.css";

const CountryCard = (props) => {
  const { capital, flag, population, name } = props.item;

  let thumbnail = noData;
  if (flag) {
    thumbnail = flag;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row" onClick={handleShow}>
        <div className="col-sm-6">
          <img
        
            className="card-img-top"
            src={thumbnail}
            alt="Loading Flag"
          />

          <div className="card-body-left">
            <p className="card-text">Population</p>
            <h5 className="card-title">{population}</h5>
          </div>
        </div>
        <div className="card-body-right">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{capital}</p>
        </div>
      </div>
      <CountryInfo {...props} handleClose={handleClose} show={show} />
    </>
  );
};

export default CountryCard;
