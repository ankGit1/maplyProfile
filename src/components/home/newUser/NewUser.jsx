import React, { useState } from "react";
import "./newUser.css";
import TabName from "../dashboard/TabName";
import { Row, Col } from "react-bootstrap";

function NewUser() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    lname: "",
    uname: "",
    location: "",
    phone: "",
    gender: "",
    interest: "",
    address: "",
    email: "",
    about: "",
    image: "",
    status: "user",
  });

  const fieldChange = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };
  const handleUpload = async (e) => {
    const filePath = URL.createObjectURL(e.target.files[0]);
    fieldChange({ image: filePath });
  };
  const submitForm = (e) => {
    e.preventDefault();
    form.id = Date.now();
    let usersArray = JSON.parse(localStorage.getItem("users"));
    usersArray.push(form);
    console.log(usersArray);
    localStorage.setItem("users", JSON.stringify(usersArray));
    setForm({
      id: "",
      name: "",
      lname: "",
      uname: "",
      location: "",
      phone: "",
      gender: "",
      interest: "",
      address: "",
      email: "",
      about: "",
      image: "",
      status: "user",
    });
    alert("User created successfully...");
  };
  return (
    <div>
      <TabName tab="New User" info="Expand our Community" />
      <h5 className="my-4">Add User</h5>
      <div className="newUser_topDiv">
        <form onSubmit={submitForm}>
          <Row className="m-0">
            <Col md={4}>
              <div className="newUser_imgDiv">
                <div className="newUser_imgContainer">
                  <img src={form.image ? form.image : ""} alt="img" />
                </div>
                <label htmlFor="profileImg">
                  <i className="fa-solid fa-circle-plus fa-2xl"></i>
                </label>
                <input
                  id="profileImg"
                  type="file"
                  onChange={(e) => handleUpload(e)}
                  required
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="p-2">
                <div className="mb-3">
                  <p className="m-0">Name</p>
                  <input
                    type="text"
                    value={form.name}
                    placeholder="John"
                    onChange={(e) => fieldChange({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Last Name</p>
                  <input
                    type="text"
                    value={form.lname}
                    placeholder="Doe"
                    onChange={(e) => fieldChange({ lname: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">User Name</p>
                  <input
                    type="text"
                    value={form.uname}
                    placeholder="john_doe"
                    onChange={(e) => fieldChange({ uname: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Location</p>
                  <input
                    type="text"
                    value={form.location}
                    placeholder="Australia"
                    onChange={(e) => fieldChange({ location: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Email</p>
                  <input
                    type="text"
                    value={form.email}
                    placeholder="john@gmail.com"
                    onChange={(e) => fieldChange({ email: e.target.value })}
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
                    placeholder="012-345-6789"
                    onChange={(e) => fieldChange({ phone: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Gender</p>
                  <input
                    type="text"
                    value={form.gender}
                    placeholder="Male"
                    onChange={(e) => fieldChange({ gender: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Interest</p>
                  <input
                    type="text"
                    value={form.interest}
                    placeholder="Coding"
                    onChange={(e) => fieldChange({ interest: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="m-0">Address</p>
                  <input
                    type="text"
                    value={form.address}
                    placeholder="789 Elm Street, Springfield, IL, USA"
                    onChange={(e) => fieldChange({ address: e.target.value })}
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
              onChange={(e) => fieldChange({ about: e.target.value })}
              required
            />
          </div>
          <div className="newUser_submitBtn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
