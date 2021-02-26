import React from "react";
import List from "../components/list";
import ListItem from "../components/listItem";
import EmployeeCard from "../components/employeeCard";

function Main() {
    // const employeeList = [];
  
    return (
        <div>
            <List>
                <ListItem>
                    <EmployeeCard></EmployeeCard>
                </ListItem>
            </List>
        </div>
    )
  }
  
  export default Main;