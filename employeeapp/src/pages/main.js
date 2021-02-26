import React from "react";
import List from "../components/list";
import Form from "../components/form";
import {ListProvider} from "../utils/GlobalState";
import "../App.css";

function Main() {
    const employeeList = [];
  
    return (
        <div>
            <ListProvider>
                <Header>
                    <Form />
                </Header>
                <List />
                
            </ListProvider>
        </div>
    )
  }
  
  export default Main;