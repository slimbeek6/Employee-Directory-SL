import React from "react";

function Form(props) {
  return <form className="list-group-item bg-light text-secondary">
      
      {props.item}
      
      </form>;
}

export default Form;