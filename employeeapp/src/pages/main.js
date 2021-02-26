import React from "react";
import List from "../components/list";
import Form from "../components/form";
import Header from "../components/header";
import { EmployeeProvider } from "../utils/GlobalState";
import "../App.css";

function Main() { 
    return (
        <div>
            <EmployeeProvider>
                <Header>
                    <Form />
                </Header>
                <List />
            </EmployeeProvider>
        </div>
    )
  }
  
  export default Main;