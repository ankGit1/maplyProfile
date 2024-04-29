import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { userSet } from "../redux/UserSlice";
import { useDispatch } from "react-redux";
import { log } from "../data/login";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = (e) => {
    let visitor = log.filter((v) => v.status === e.target.value);
    console.log(visitor[0]);
    dispatch(userSet(visitor[0]));
    navigate("/home");
  };
  return (
    <div>
      <div className="login_topDiv">
        <div className="login_imgDiv"></div>
        <div className="login_logDiv">
          <h6 className="my-4">
            <img src="/images/maplogo.png" className="maplyLogo" alt="img" />
            maply<b>Profiles</b>
          </h6>
          <div className="my-4">
            <h2 className="fw-semibold">Login</h2>
            <div className="text-secondary m-0 small-p">
              Select your access level to proceed
            </div>
          </div>
          <div className="loginBtn mb-4">
            <button
              value="admin"
              className="loginBtn1"
              onClick={(e) => loggedIn(e)}
            >
              Admin
            </button>
            <button
              value="user"
              className="loginBtn2"
              onClick={(e) => loggedIn(e)}
            >
              Normal User
            </button>
          </div>
          <div className="my-4">
            <div className="login_users mb-2">
              <img src="./images/sUser1.jpg" alt="img" />
              <img src="./images/sUser2.jpg" alt="img" />
              <img src="./images/sUser3.jpg" alt="img" />
              <img src="./images/sUser4.jpg" alt="img" />
              <img src="./images/sUser5.jpg" alt="img" />
            </div>
            <p className=" small-p">
              1k+ users already joined us, now it's your turn.
            </p>
          </div>
          <div className="login_copyright">
            © 2024 maplyProfiles. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
