import React from "react";
import "./bottom.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import PieGraph from "../../../graphs/PieGraph";
import BubbleGraph from "../../../graphs/TreeMap";

function DashboardBottom() {
  return (
    <>
      <div className="bottom_topDiv">
        <Row className="my-2 mx-0">
          <Col lg={5} md={6} className="p-0">
            <div className="dash_bottom_colDiv">
              <PieGraph />
            </div>
          </Col>
          <Col lg={7} md={6} className="px-2">
            <div className="dash_bottom_colDiv ">
              <BubbleGraph />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashboardBottom;
