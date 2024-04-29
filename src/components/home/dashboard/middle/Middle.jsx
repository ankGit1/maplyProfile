import React from "react";
import "./middle.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import LineChart from "../../../graphs/LineChart";
import BarGraph from "../../../graphs/BarGraph";

function Middle() {
  return (
    <>
      <Row className="m-0">
        <Col lg={7} md={6} className="p-1">
          <div className="dash_middle_colDivOne">
            <LineChart />
          </div>
        </Col>
        <Col lg={5} md={6} className="p-1">
          <div className="dash_middle_colDivOne">
            <div>
              <BarGraph />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Middle;
