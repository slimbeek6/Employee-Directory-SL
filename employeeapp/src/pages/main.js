import React from "react";
import List from "../components/list";
import ListItem from "../components/listItem";

function Main() {
    const employeeList = [];
  
    return (
      <List>
        {employeeList.map(item => <ListItem item={item} />)}
      </List>
    )
  }
  
  export default Main;