import React, { useState } from "react";
import "./profile.css";
import TabName from "../dashboard/TabName";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const loginUser = useSelector((state) => state.info.user);
  const state = useLocation().state; // state coming from sidebar and users comp.
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: state.id,
    name: state.name,
    lname: state.lname,
    uname: state.uname,
    location: state.location,
    phone: state.phone,
    gender: state.gender,
    interest: state.interest,
    address: state.address,
    email: state.email,
    about: state.about,
    image: state.image,
    status: state.status,
  });
  const [disVal, setDisVal] = useState(true);
  const fieldChange = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };
  const submitChange = () => {
    if (loginUser.id === form.id) {
      alert("Admin cant change or delete its own Profile");
      return;
    }
    let localUsers = JSON.parse(localStorage.getItem("users"));
    const replaceOb = () => {
      return localUsers.map((item) => {
        if (item.id === form.id) {
          return form;
        }
        return item;
      });
    };
    const modifiedArray = replaceOb(); // Call the function to get the modified array
    console.log(modifiedArray);
    localStorage.setItem("users", JSON.stringify(modifiedArray));
  };

  const deleteUser = () => {
    if (loginUser.id === form.id) {
      alert("Admin cant change or delete its own Profile");
      return;
    }
    let localUsers = JSON.parse(localStorage.getItem("users"));
    const deleteOb = localUsers.filter((item) => item.id !== form.id);
    localStorage.setItem("users", JSON.stringify(deleteOb));
    navigate("/home/users");
  };

  return (
    <div>
      <TabName tab="Profile" info="Detailed Information about User" />
      <div className="my-4 admin_power">
        <h5>Administrator Details</h5>
        {loginUser.status === "admin" && (
          <div>
            <i
              class="fa-solid fa-pen fa-lg mx-4 editLogo"
              onClick={() => setDisVal(false)}
            ></i>
            <i
              class="fa-solid fa-trash fa-lg mx-4 deleteLogo"
              onClick={deleteUser}
            ></i>
          </div>
        )}
      </div>
      <div className="profile_container">
        <div className="profile_backImg">
          <img src="/images/proBack.jpg" alt="img" />
        </div>
        <div className="profile_rc">
          <Row className="m-0">
            <Col md={4}>
              <div className="profile_colOneDiv">
                <img src={form.image} alt="img" />
                <h5>{`${form.name} ${form.lname}`}</h5>
                <button>{form.status}</button>
                <p className="my-2">{form.email}</p>
                <div className="py-1">
                  <a href="">
                    <i className="fa-brands fa-square-facebook fa-lg mx-2"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin fa-lg mx-2"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-square-instagram fa-lg mx-2"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-2">
                <div className="mb-3">
                  <p className="m-0">Name</p>
                  <input
                    type="text"
                    value={form.name}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Last Name</p>
                  <input
                    type="text"
                    value={form.lname}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ lname: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">User Name</p>
                  <input
                    type="text"
                    value={form.uname}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ uname: e.target.value })}
                    required
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-2">
                <div className="mb-3">
                  <p className="m-0">Phone</p>
                  <input
                    type="text"
                    value={form.phone}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ phone: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Gender</p>
                  <input
                    type="text"
                    value={form.gender}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ gender: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Interest</p>
                  <input
                    type="text"
                    value={form.interest}
                    disabled={disVal}
                    onChange={(e) => fieldChange({ interest: e.target.value })}
                    required
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <p>About</p>
            <textarea
              className="w-100"
              rows={5}
              type="text"
              value={form.about}
              disabled={disVal}
              onChange={(e) => fieldChange({ about: e.target.value })}
              required
            />
          </div>

          {!disVal && (
            <div className="newUser_submitBtn">
              <button onClick={submitChange}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
