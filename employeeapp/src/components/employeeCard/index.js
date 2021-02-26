import React from "react";

function EmployeeCard(props) {
  return <div className="card bg-light text-secondary">{props.item}</div>;
}

export default EmployeeCard;