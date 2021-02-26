import React from "react";
import List from "../components/list";
import ListItem from "../components/listItem";
import EmployeeCard from "../components/employeeCard";

function Main() {
    const employeeList = [];
  
    return (
      <List>
        <ListItem>
            <EmployeeCard></EmployeeCard>
        </ListItem>
      </List>
    )
  }
  
  export default Main;