import React, { useEffect } from "react";
import "./home.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { usersData } from "../../data/usersData";

function Home() {
  useEffect(() => {
    let sdata = JSON.stringify(usersData);
    localStorage.setItem("users", sdata);
  }, []);
  return (
    <div className="home_topDiv">
      <div className="home_leftDiv">
        <Sidebar />
      </div>
      <div className="home_rightDiv">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
