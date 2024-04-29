import React from "react";

function TabName({ tab, info }) {
  return (
    <div className="divTitle">
      <h5 className="fw-semibold m-0">{tab}</h5>
      <span>{info}</span>
    </div>
  );
}

export default TabName;
