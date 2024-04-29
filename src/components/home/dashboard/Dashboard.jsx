import React from "react";
import "./dashboard.css";
import Top from "./top/Top";
import Middle from "./middle/Middle";
import Bottom from "./bottom/Bottom";
import TabName from "./TabName";

function Dashboard() {
  return (
    <div>
      <TabName tab="Dashboard" info="Hello, Welcome to maplyProfile!" />
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default Dashboard;
