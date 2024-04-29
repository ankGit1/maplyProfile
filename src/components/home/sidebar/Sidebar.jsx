import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSet } from "../../redux/UserSlice";

function Sidebar() {
  let dispatch = useDispatch();
  let loginUser = useSelector((state) => state.info.user);
  const logout = () => {
    dispatch(logoutSet());
  };
  return (
    <div className="sidebar_topDiv">
      <div className="py-3 mb-3 brandName">
        <img src="/images/maplogo.png" alt="logo" />
        <span className="hide_LinkText">
          maply<b>Profile</b>
        </span>
      </div>
      <div>
        <ul className="sidebarUl">
          {loginUser.status === "admin" && (
            <li>
              <Link to="/home">
                <i className="fa-solid fa-border-all fa-sm dash_teal sidebar_icons"></i>
                <span className="hide_LinkText">Dashboard</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="users">
              <i className="fa-solid fa-user-group fa-sm dash_teal sidebar_icons"></i>
              <span className="hide_LinkText">All Users</span>
            </Link>
          </li>
          {loginUser.status === "admin" && (
            <li>
              <Link to="newuser">
                <i className="fa-solid fa-user-plus fa-sm dash_teal sidebar_icons"></i>
                <span className="hide_LinkText">New User</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="profile" state={loginUser}>
              <i className="fa-solid fa-id-badge fa-sm dash_teal sidebar_icons"></i>
              <span className="hide_LinkText">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar_userInfo">
        <div className="sidebar_imageDiv">
          <img src={loginUser.image} alt="img" />
        </div>
        <p className="my-2">{loginUser.email}</p>
        <div className="sidebar_imgBtns">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="logBtns">
        <button className="mb-2" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
