import React from "react";
import "./top.css";
import { tabsData } from "../../../data/tabs";
import { Row, Col } from "react-bootstrap";

function Top() {
  return (
    <>
      <Row className="mx-0 mt-4 mb-2">
        {tabsData.map((tab) => (
          <Col key={tab.id} lg={3} sm={6} className="mb-2 p-0">
            <div className="px-1">
              <div className=" dash_tab">
                <h3 className="fw-bold mb-1 text-success">{tab.num}</h3>
                <p className="m-0">{tab.cat}</p>
                <p className="small-p text-dark-emphasis">{tab.stat}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Top;
