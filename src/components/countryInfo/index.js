import { Button, Modal } from "react-bootstrap";
import React from "react";

const CountryInfo = (props) => {
  const lang = props.item && props.item.languages.map((entry) => entry.name);
  const curr = props.item && props.item.currencies.map((entry) => entry.name);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Capital : {props.item.capital}
        <br></br>
        Currencies : {curr.join(", ")}
        <br></br>
        Languages : {lang.join(", ")}
        <br></br>
        Population : {props.item.population}
        <br></br>
        Region : {props.item.region}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CountryInfo;
