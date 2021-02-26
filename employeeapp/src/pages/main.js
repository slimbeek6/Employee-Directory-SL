import React from "react";
import List from "../components/list";
import Form from "../components/form";
import {ListProvider} from "../utils/GlobalState";

function Main() {
    const employeeList = [];
  
    return (
        <div>
            <ListProvider>
                <List />
                <Form />
            </ListProvider>
        </div>
    )
  }
  
  export default Main;