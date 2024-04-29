import React, { useEffect, useState } from "react";
import "./users.css";
import TabName from "../dashboard/TabName";
import SearchBar from "./SearchBar";
import Card from "../card/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function Users() {
  let users = useSelector((state) => state.info.filter);
  console.log(users);

  return (
    <div>
      <TabName tab="All Users" info="Explore Every Profile" />
      <SearchBar />
      <h5>Users Information</h5>
      <div className="mt-5">
        <Row className="m-0">
          {users.length > 0 ? (
            users.map((user) => (
              <Col lg={6} key={user.id}>
                <Card info={user} />
              </Col>
            ))
          ) : (
            <p>No user found</p>
          )}
        </Row>
      </div>
    </div>
  );
}

export default Users;
