import React from "react";

function ListItem(props) {
  return <li className="list-group-item bg-light text-secondary">{props.children}</li>;
}

export default ListItem;