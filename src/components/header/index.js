import React from "react";
import Form from "../form";
import "./style.css";

function Header() {
  return (
    <div className="header">
        <h2 className="title">Employee Contact List:</h2>
        <div className="card">
        <Form />
        </div>
    </div>
  )
}

export default Header;